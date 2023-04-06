import { Loading } from "@/components/layout/Loading";
import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const AdminPage = () => {
  /* store in cookies or local storage so they can enter again? */
  const [password, setPassword] = useState<string>("");
  const { data: session, status } = useSession();

  const { data: matches, isLoading } = useGetMatches();

  /*   if (status === "unauthenticated") return <p>Access denied.</p>;

  if (isLoading) {
    return <Loading />;
  } */
  console.log(process.env.ADMIN_PASSWORD);

  return (
    <div>
      <div>
        <label htmlFor="admin">Enter Password</label>
        <input
          id="admin"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {password === "coachseger" && (
        <>
          <p>Welcome to admin page, {session?.user?.email}</p>
          <div>
            <Link href={"/admin/create-match"}>Create new match</Link>
            <div>
              <h5>Update match</h5>
              {matches &&
                matches.map((match) => (
                  <div key={match._id}>
                    <Link href={`/admin/update-match/${match._id}`}>
                      {match.opposition} - {match.date}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPage;
