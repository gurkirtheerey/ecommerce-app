import { Info } from "../components/Info";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import Head from "next/head";
import { useContext, useEffect } from "react";
import axios from "axios";
import parseCookies from "../lib/parseCookies";
import UserContext from "../context/userContext";
import Cookie from "js-cookie";

export const getServerSideProps = ({ req }) => {
  const cookies = parseCookies(req);
  return {
    props: { cartCookie: cookies && cookies.cart ? cookies.cart : null },
  };
};

export default function Home({ cartCookie }) {
  const { setCart } = useContext(UserContext);

  useEffect(() => {
    if (cartCookie !== null) {
      setCart(JSON.parse(cartCookie));
    }
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      alert("You will be receiving email shortly...");
      Cookie.remove("cart");
      setCart([]);
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
