import Link from "next/link";
import styles from "./UpdateMatch.module.css";
import { MdDeleteOutline } from "react-icons/md";

import { ScheduledMatch } from "@/utils/types/match";
import { useDeleteMatch } from "@/queries/matches/hooks/useDeleteMatch";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { allMatchesKey } from "@/queries/matches/hooks/useGetAllMatches";
import { matchesKey } from "@/queries/matches/hooks/useGetMatches";

interface Props {
  match: ScheduledMatch;
}

export const UpdateMatchComponent: React.FC<Props> = ({ match }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate } = useDeleteMatch(match._id, {
    onSuccess: () => {
      queryClient.invalidateQueries([allMatchesKey]);
      toast({
        title: "Match Removed",
        status: "success",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        status: "error",
      });
    },
  });

  const handleDeleteMatch = (): void => {
    mutate();
  };

  return (
    <div className={styles.match} key={match._id}>
      <Link href={`/admin/update-match/${match._id}`}>
        {match.opposition} - {match.date}
      </Link>
      <span className={styles.delete} onClick={handleDeleteMatch}>
        <MdDeleteOutline />
      </span>
    </div>
  );
};
