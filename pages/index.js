import { Info } from "../components/Info";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Starter</title>
      </Head>
      <Navigation />
      <Main />
      <Info />
    </>
  );
}
