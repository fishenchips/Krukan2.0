import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    let client;

    try {
      client = await MongoClient.connect(process.env.MONGODB_URI as string);
      const db = client.db();
      const playerLeaderboard = db.collection("player-leaderboard");
      const leaderboardData = await playerLeaderboard.find({}).toArray();
      leaderboardData.sort(
        (a: { score: number }, b: { score: number }) => b.score - a.score
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
