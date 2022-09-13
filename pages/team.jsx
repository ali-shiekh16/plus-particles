import TeamContainer from "../components/TeamContainer/TeamContainer";
import TeamHeading from "../components/TeamHeading/TeamHeading";
import Head from "next/head";

const team = () => {
  return (
    <>
      <Head>
        <title>Team Page</title>
      </Head>
      <TeamHeading />
      <TeamContainer />
    </>
  );
};

export default team;
