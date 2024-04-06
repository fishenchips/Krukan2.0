import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { CardsLeaderBoardPlayer } from "@/utils/types/playerInfo";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    let client;

    try {
      client = await MongoClient.connect(process.env.MONGODB_URI as string);
      const db = client.db();
      const cardsLeaderboard = db.collection("cards-leaderboard");
      const leaderboardData = await cardsLeaderboard.find({}).toArray();

      leaderboardData.sort(
        (a: CardsLeaderBoardPlayer, b: CardsLeaderBoardPlayer) => {
          const totalCardsA = a.yellowCards + a.redCards * 3;
          const totalCardsB = b.yellowCards + b.redCards * 3;
          if (totalCardsA !== totalCardsB) {
            return totalCardsB - totalCardsA;
          } else {
            if (a.redCards !== b.redCards) {
              return b.redCards - a.redCards;
            } else {
              return (a.info.firstName as string).localeCompare(
                b.info.firstName as string
              );
            }
          }
        }
      );

      res.status(200).json(leaderboardData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch leaderboard data" });
    } finally {
      if (client) {
        client.close();
      }
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
