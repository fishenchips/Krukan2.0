import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

type Data = {
  data: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
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
      { $addToSet: { roster: data.playerData } }
    );

    client.close();

    res.status(200).json({ message: "User added to match.", data });

    return data;
  }
};

export default handler;
