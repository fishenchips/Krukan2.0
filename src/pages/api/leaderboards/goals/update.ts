import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { LeaderBoardPlayer } from "@/utils/types/playerInfo";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    const players = req.body as Array<LeaderBoardPlayer>;
    const playerstoUpdate = {};
    players.forEach((player) => {
      playerstoUpdate[player._id] = {
        info: player.info,
        score: player.score,
      };
    });

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    if (!db) {
      return res.status(404).json({ message: "Something went wrong" });
    }

    const goalsLeaderboard = db.collection("goals-leaderboard");

    try {
      const update = players.map((player) => ({
        updateOne: {
          filter: { _id: new ObjectId(player._id) },
          update: {
            $inc: { score: Number(player.score) },
            $set: { info: player.info },
          },
          upsert: true,
        },
      }));

      await goalsLeaderboard.bulkWrite(update);

      res
        .status(200)
        .json({ message: "Players added to leaderboard", playerstoUpdate });
    } catch (error) {
      console.error(error);
    } finally {
      client.close();
    }
  }
};

export default handler;
