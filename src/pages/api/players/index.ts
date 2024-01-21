import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const usersCollection = db.collection("users");

    const dbUsers = await usersCollection.find().toArray();

    const players = dbUsers.map((player) => ({
      _id: player._id,
      info: player.info,
    }));

    client.close();

    res.status(200).json(players);
  }
};

export default handler;
