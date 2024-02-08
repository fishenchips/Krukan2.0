import { AdminLogin } from "@/components/admin/login";
import { Loading } from "@/components/layout/Loading";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import cookieCutter from "cookie-cutter";
import { useGetAllMatches } from "@/queries/matches/hooks/useGetAllMatches";
import { UpdateMatchComponent } from "@/components/admin/matches/UpdateMatch";

const AdminPage = () => {
  const [password, setPassword] = useState<string | undefined>("");
  const { data: session, status } = useSession();

  const { data: matches, isLoading } = useGetAllMatches();

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
                    <UpdateMatchComponent key={match._id} match={match} />
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
