"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";

/**
 * A highly performant and customizable sparkle cursor effect for React,
 * contained within the viewport to prevent scrollbars.
 *
 * @param {object} props - The component props.
 * @param {string[]} [props.colors] - Array of colors. Defaults to MUI theme.
 * @param {boolean} [props.disabled=false] - Disables the effect.
 * @param {boolean} [props.disableOnTouch=true] - Disables on touch devices.
 * @param {number} [props.sparkleCount=2] - Number of sparkles on mouse move.
 * @param {number} [props.clickBurstCount=12] - Number of sparkles on click.
 * @param {number} [props.sparkleSize=10] - Base size of the sparkles.
 * @param {number} [props.animationDuration=1500] - Animation duration in ms.
 * @param {number} [props.throttleDelay=30] - Throttle delay for mouse move in ms.
 * @returns {JSX.Element} A container element for the sparkles.
 */
export default function SparkleCursor({
  colors,
  disabled = false,
  disableOnTouch = true,
  sparkleCount = 2,
  clickBurstCount = 12,
  sparkleSize = 10,
  animationDuration = 1500,
  throttleDelay = 30,
}) {
  const theme = useTheme();
  const containerRef = useRef(null);
  const lastMouseMoveTime = useRef(0);

  // Define a rich color palette using props, MUI theme, or sensible fallbacks
  const sparkleColors = colors || [
    theme?.palette?.primary?.main || "#3a86ff",
    theme?.palette?.secondary?.main || "#ff006e",
    theme?.palette?.warning?.light || "#ffbe0b",
    theme?.palette?.info?.light || "#4361ee",
    "#8338ec",
  ];

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (disabled || (disableOnTouch && isTouchDevice)) {
      return;
    }

    // Ensure the container is available for appending sparkles
    const sparkleContainer = containerRef.current;
    if (!sparkleContainer) return;

    // Inject CSS for the sparkle animation only once per document
    if (!document.getElementById("sparkle-cursor-style")) {
      const style = document.createElement("style");
      style.id = "sparkle-cursor-style";
      style.innerHTML = `
        .sparkle-element {
          position: absolute;
          background-color: var(--sparkle-color);
          will-change: transform, opacity;
          animation: sparkle-fade-out ${animationDuration}ms ease-out forwards;
          mask-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"%3E%3Cpath d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 7 19q4 12 4 21 0 20-14 34l-208 208q-14 14-34 14t-34-14l-208-208q-14-14-14-34 0-7 4-21 12-32 52-72q30-30 72-32 40 0 68 28l208 208q28 28 28 68 0 40-28 68l-208 208q-28 28-68 28t-68-28l-208-208q-28-28-28-68 0-40 28-68l208-208q28-28 68-28 42 0 72 32-3-3-19-18.5t-21.5-21.5-15-19-7-19q-4-12-4-21 0-20 14-34l208-208q14-14 34-14t34 14l208 208q14 14 14 34 0 7-4 21-12 32-52 72-30 30-72 32-40 0-68-28l-208-208q-28-28-28-68z" fill="currentColor"/%3E%3C/svg%3E');
          mask-size: contain;
          mask-repeat: no-repeat;
        }

        @keyframes sparkle-fade-out {
          0% {
            transform: translate(var(--start-x), var(--start-y)) rotate(var(--start-rot)) scale(var(--start-s));
            opacity: 1;
          }
          100% {
            transform: translate(var(--end-x), var(--end-y)) rotate(var(--end-rot)) scale(var(--end-s));
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const createSparkles = (x, y, count) => {
      for (let i = 0; i < count; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle-element";
        sparkleContainer.appendChild(sparkle);

        const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
        const size = Math.random() * sparkleSize + 5;
        const startX = `${Math.random() * 80 - 40}px`;
        const startY = `${Math.random() * 80 - 40}px`;
        const endX = `${Math.random() * 160 - 80}px`;
        const endY = `${Math.random() * 160 - 80}px`;
        const startRot = Math.random() * 360;
        const endRot = startRot + Math.random() * 180 - 90;
        const startScale = Math.random() * 0.4 + 0.8;
        const endScale = Math.random() * 0.3;

        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        // Use clientX/Y for positioning within the fixed container
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.setProperty("--sparkle-color", color);
        sparkle.style.setProperty("--start-x", startX);
        sparkle.style.setProperty("--start-y", startY);
        sparkle.style.setProperty("--end-x", endX);
        sparkle.style.setProperty("--end-y", endY);
        sparkle.style.setProperty("--start-rot", `${startRot}deg`);
        sparkle.style.setProperty("--end-rot", `${endRot}deg`);
        sparkle.style.setProperty("--start-s", String(startScale));
        sparkle.style.setProperty("--end-s", String(endScale));

        setTimeout(() => sparkle.remove(), animationDuration);
      }
    };

    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseMoveTime.current > throttleDelay) {
        requestAnimationFrame(() => {
          createSparkles(e.clientX, e.clientY, sparkleCount);
        });
        lastMouseMoveTime.current = now;
      }
    };

    const handleMouseDown = (e) => {
      requestAnimationFrame(() => {
        createSparkles(e.clientX, e.clientY, clickBurstCount);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    if (clickBurstCount > 0) {
      window.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (clickBurstCount > 0) {
        window.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [
    theme,
    disabled,
    disableOnTouch,
    sparkleColors,
    sparkleCount,
    clickBurstCount,
    sparkleSize,
    animationDuration,
    throttleDelay,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
