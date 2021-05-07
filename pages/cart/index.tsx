import React, { useContext, useEffect } from "react";
import { Checkout } from "../../components/Checkout";
import { CheckoutProduct } from "../../components/CheckoutProduct";
import UserContext from "../../context/userContext";
import Cookie from "js-cookie";
import parseCookies from "../../lib/parseCookies";

export const getServerSideProps = ({ req }) => {
  const cookies = parseCookies(req);
  const cookie = cookies.cart;
  return {
    props: { cartCookie: cookies && cookies.cart ? cookies.cart : null },
  };
};

const Cart = ({ cartCookie }) => {
  const { cart, setCart } = useContext(UserContext);

  useEffect(() => {
    setCart(JSON.parse(cartCookie));
  }, []);

  return (
    <>
      <Checkout />
    </>
  );
};

export default Cart;
