import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { CardsLeaderBoardPlayer } from "@/utils/types/playerInfo";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    const players = req.body as Array<CardsLeaderBoardPlayer>;
    const playerstoUpdate = {};
    players.forEach((player) => {
      playerstoUpdate[player._id] = {
        info: player.info,
        yellowCards: player.yellowCards,
        redCards: player.redCards,
      };
    });

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);

    const db = client.db();

    if (!db) {
      return res.status(404).json({ message: "Something went wrong" });
    }

    const cardsLeaderboard = db.collection("cards-leaderboard");

    try {
      const update = players.map((player) => ({
        updateOne: {
          filter: { _id: new ObjectId(player._id) },
          update: {
            $inc: {
              yellowCards: Number(player.yellowCards),
              redCards: Number(player.redCards),
            },
            $set: { info: player.info },
          },
          upsert: true,
        },
      }));

      await cardsLeaderboard.bulkWrite(update);

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
