import { Info } from "../components/Info";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import Head from "next/head";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      alert("You will be receiving email shortly...");
    }
    if (query.get("cancelled")) {
      alert("you cancelled the order..");
    }
  }, []);

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
