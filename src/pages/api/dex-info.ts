import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://api.core-1.dexter.zone/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          pool_weekly_aggregate_with_apr {
            pool_id
            current_liquidity_usd
          }
          swap_volume_lifetime_aggregate {
            total_swap_volume
          }
          }`
      })
    });
    const data = await response.json();
    if (response.ok) {
      return res.status(200).json({ data, error: null });
    }
    return res.status(400).json({ data: null, error: data.error });
  } catch (e) {
    return res.status(500).json({ data: null, error: e });
  }
}
