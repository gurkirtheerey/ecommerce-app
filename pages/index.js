import { Info } from "../components/Info";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import Head from "next/head";
import { useEffect } from "react";
import axios from "axios";

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

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user");
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    })();
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
