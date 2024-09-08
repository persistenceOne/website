import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "https://api.core-1.dexter.zone/api/rest/overview_info"
    );
    const data = await response.json();
    if (response.ok) {
      return res.status(200).json({ data, error: null });
    }
    return res.status(400).json({ data: null, error: data.error });
  } catch (e) {
    return res.status(500).json({ data: null, error: e });
  }
}
