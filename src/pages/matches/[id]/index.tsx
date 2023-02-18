import { useRouter } from "next/router";

const MatchPage = () => {
  const { query } = useRouter();

  const match = JSON.parse(query.match as string);

  console.log(match);

  return <>hej</>;
};

export default MatchPage;
