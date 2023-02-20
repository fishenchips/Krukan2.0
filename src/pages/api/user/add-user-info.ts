import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { getSession } from "next-auth/react";

import { PlayerInfo } from "@/utils/types/playerInfo";

type Data = {
  data: PlayerInfo;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "PATCH") {
    const session = await getSession({ req });

    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    const usersCollection = db.collection("users");

    const DBUser = await usersCollection.findOne({
      email: session?.user?.email,
    });

    console.log(DBUser);

    const update = await usersCollection.updateOne(
      { _id: DBUser?._id },
      { $set: { info: data } }
    );

    client.close();

    res.status(200).json({ message: "User info added.", data });

    return data;
  }
};

export default handler;
