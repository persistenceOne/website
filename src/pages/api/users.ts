import dayjs from "dayjs";
// @ts-ignore
import { GraphQLClient, gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

type User = {
  date: string;
  user_count: number;
};

type UserMonthly = {
  month_end_date: string;
  month_start_date: string;
  user_count: number;
};

const START_DATE = "2021-01-01";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const graphQLClient = new GraphQLClient(
      "https://stats.testnet.dexter.zone/v1/graphql",
      {
        headers: {
          "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_API_KEY
        }
      }
    );
    const { startDate, endDate } = req.query;
    const date = new Date();
    const currentDate = date.toISOString().split("T")[0];
    const start_date = startDate || START_DATE;
    const end_date = endDate || currentDate;
    const { get_daily_user_count, get_monthly_user_count } =
      await graphQLClient.request<{
        get_daily_user_count: User[];
        get_monthly_user_count: UserMonthly[];
      }>(
        gql`
        query {
          get_daily_user_count(
            args: { start_date: "${start_date}", end_date: "${end_date}" }
          ) {
            date
            user_count
          }
          get_monthly_user_count(
            args: { start_date: "${start_date}", end_date: "${end_date}" }, order_by: { month_start_date: asc }
          ) {
            month_start_date
            month_end_date
            user_count
          }
        }
      `
      );

    // TODO: Move logic to client side to reduce response size
    const monthlyData = get_monthly_user_count.map((user: any) => {
      return {
        date: dayjs(user.month_end_date).format("MMM 'YY"),
        monthly: dayjs(user.month_end_date).format("MMM 'YY"),
        dateObj: {
          day: dayjs(user.month_end_date).format("D"),
          month: dayjs(user.month_end_date).format("MMM"),
          year: dayjs(user.month_end_date).format("YYYY")
        },
        user_count: user.user_count
      };
    });
    res.status(200).json({ data: { monthlyData }, error: null });
  } catch (e) {
    res.status(500).json({ data: null, error: e });
  }
}
