import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    const { emailVerified, ...data } = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const matchesCollection = db.collection("matches");

    const DBmatch = await matchesCollection.findOne({
      _id: new ObjectId(data.matchId),
    });

    const update = await matchesCollection.updateOne(
      { _id: DBmatch?._id },
      { $pull: { roster: data.playerData } }
    );

    client.close();

    res.status(200).json({ message: "User removed from match.", data });

    return data;
  }
};

export default handler;
