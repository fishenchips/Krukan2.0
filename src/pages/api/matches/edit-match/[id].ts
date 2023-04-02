import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const matchesCollection = db.collection("matches");

    const DBMatch = await matchesCollection.findOne({
      _id: new ObjectId(data._id as string),
    });

    await matchesCollection.updateOne(
      { _id: DBMatch?._id },
      {
        $set: {
          home: data.home,
          arena: data.arena,
          opposition: data.opposition,
          date: data.date,
          shortDate: data.shortDate,
          gameType: data.gameType,
        },
      }
    );

    client.close();

    if (!DBMatch) {
      res.status(404).json({ message: "Match not found." });
    }

    res.status(200).json({ message: "match updated.", data });
  }
};

export default handler;
