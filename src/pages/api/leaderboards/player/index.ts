import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { LeaderBoardPlayer } from "@/utils/types/playerInfo";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    const players = req.body as Array<LeaderBoardPlayer>;

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    if (!db) {
      return res.status(404).json({ message: "Something went wrong" });
    }

    const playerLeaderboard = db.collection("player-leaderboard");

    try {
      const playersToUpdate = players.map((player) => ({
        updateOne: {
          filter: { _id: new ObjectId(player._id) },
          update: { $inc: { score: player.score } },
        },
      }));

      await playerLeaderboard.bulkWrite(playersToUpdate);

      res
        .status(200)
        .json({ message: "players added to leaderboard", players });
    } catch (error) {
      console.error(error);
    }

    await client.close();
  }
};

export default handler;
