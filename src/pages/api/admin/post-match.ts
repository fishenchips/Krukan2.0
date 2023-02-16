import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type Data = {
  match: any; // for now
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const matchesCollection = db.collection("matches");

    const matches = await matchesCollection.insertOne(data);

    console.log(matches);

    client.close();

    res.status(201).json({ message: "Match created.", match: data });

    return data;
  }
};

export default handler;
