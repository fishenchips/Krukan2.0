import { useSession, getSession } from "next-auth/react";

const AdminPage = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return <p>Access denied.</p>;

  return <p>Welcome to admin page, {session?.user?.email}</p>;
};

export default AdminPage;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
