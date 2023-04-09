import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const matchesCollection = db.collection("matches");

    const matches = await matchesCollection.find().sort({ date: 1 }).toArray();

    const today = new Date().toISOString();

    const upcomingMatches = matches.filter((match) => match.date > today);

    client.close();

    res.status(200).json(upcomingMatches);
  }
};

export default handler;
