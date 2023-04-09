import { AdminLogin } from "@/components/admin/login";
import { Loading } from "@/components/layout/Loading";
import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import cookieCutter from "cookie-cutter";

const AdminPage = () => {
  const [password, setPassword] = useState<string | undefined>("");
  const { data: session, status } = useSession();

  const { data: matches, isLoading } = useGetMatches();

  if (isLoading || status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") return <p>Access denied.</p>;

  return (
    <>
      {password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
      cookieCutter.get("isAdmin") ? (
        <div>
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
        </div>
      ) : (
        <AdminLogin setPassword={setPassword} />
      )}
    </>
  );
};

export default AdminPage;
