import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const id = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const matchesCollection = db.collection("matches");

    const DBMatch = await matchesCollection.findOne({
      _id: new ObjectId(id),
    });

    await matchesCollection.deleteOne({ _id: DBMatch?._id });

    client.close();

    if (!DBMatch) {
      return res.status(404).json({ message: "Match not found." });
    }

    res.status(200).json({ message: "match deleted." });
  }
};

export default handler;
