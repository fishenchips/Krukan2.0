import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const session = await getSession({ req });

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const usersCollection = db.collection("users");

    const DBUser = await usersCollection.findOne({
      email: session?.user?.email,
    });

    client.close();

    if (!DBUser) {
      res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(DBUser);

    return DBUser;
  }
};

export default handler;
