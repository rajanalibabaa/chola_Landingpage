import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("Request body:", req.body);

      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbzMAfUothbiBF93aostc-aUWiDWGHrwiuILLqHFKlzGBzNWIr8kj4hM3ry6ODUhDZlQ/exec",
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
