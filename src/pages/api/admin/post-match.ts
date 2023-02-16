import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type Data = {
  data: any; // for now
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const matchesCollection = db.collection("matches");

    const match = await matchesCollection.insertOne(data);

    console.log(match);

    client.close();

    res.status(201).json({ message: "Match created.", data });

    return data;
  }
};

export default handler;
