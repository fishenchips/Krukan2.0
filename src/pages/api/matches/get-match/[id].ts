import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { _id } = req.query;

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const matchesCollection = db.collection("matches");

    const DBMatch = await matchesCollection.findOne({
      _id: new ObjectId(_id as string),
    });

    client.close();

    if (!DBMatch) {
      res.status(404).json({ message: "Match not found." });
    }

    res.status(200).json(DBMatch);
  }
};

export default handler;
