import axios from "axios";

export default async (req: any, res: any) => {
  const { email, subject, text } = req.body;
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const list_id = "c503401e-ab5f-43e3-9d94-b84a3c27468d";
    const data = {
      list_ids: [list_id],
      contacts: [
        {
          email
        }
      ]
    };

    const apiKey = process.env.SENDGRID_API_KEY;
    const response = await fetch(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}` // Bearer token for authorization
        },
        body: JSON.stringify(data)
      }
    );
    const responseJson = await response.json();
    if (response.ok) {
      return res.status(200).json({ data: responseJson, error: null });
    }
    return res.status(400).json({ data: null, error: responseJson.error });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({ error: "Failed to add contact" });
  }
};
