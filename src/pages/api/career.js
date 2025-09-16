import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("Request body:", req.body);

      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbzhU-IyGiiUBDepOOFCYe4EOfpocxtslF2zikAUq6JGgUGhbTrDzh3Ejy5p8Bzqlclw/exec",
        req.body,
        { headers: { "Content-Type": "application/json" } }
      );

      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  } else {
    res.status(405).json({ status: "error", message: "Method not allowed" });
  }
}
