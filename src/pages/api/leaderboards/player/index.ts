import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    const { body } = req;
    console.log(body);

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const playerLeaderboard = db.collection("player-leaderboard");

    const dbPlayerLeaderboard = await playerLeaderboard.find().toArray();

    const players = dbPlayerLeaderboard.map((player) => ({
      _id: player._id,
      info: player.info,
    }));

    client.close();

    res.status(200).json(players);
  }
};

export default handler;
