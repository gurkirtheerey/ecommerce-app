import React, { useContext } from "react";
import { Checkout } from "../../components/Checkout";
import { CheckoutProduct } from "../../components/CheckoutProduct";
import UserContext from "../../context/userContext";

const Cart = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default Cart;
