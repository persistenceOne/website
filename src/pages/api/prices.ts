import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const tokens = ["cosmos", "osmosis", "binancecoin", "dydx", "persistence"];
    const data = await fetch(
      `https://pro-api.coingecko.com/api/v3/simple/price?ids=${tokens.join(
        ","
      )}&vs_currencies=usd`,
      {
        headers: {
          "x-cg-pro-api-key": process.env.COINGECKO_API_KEY!
        }
      }
    );
    res.status(200).json({ data: await data.json(), error: null });
  } catch (e) {
    res.status(500).json({ data: null, error: e });
  }
}
