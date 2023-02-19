import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { getSession } from "next-auth/react";

import { PlayerInfo } from "@/utils/types/playerInfo";

type Data = {
  data?: PlayerInfo;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    const session = await getSession({ req });

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const usersCollection = db.collection("users");

    const DBUser = await usersCollection.findOne({
      email: session?.user?.email,
    });

    client.close();

    console.log(DBUser);

    if (!DBUser) {
      res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User found", data: DBUser as PlayerInfo });

    return DBUser;
  }
};

export default handler;
