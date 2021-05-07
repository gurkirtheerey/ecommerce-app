import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/userContext";
import Cookie from "js-cookie";
import { Navigation } from "../../components/Navigation";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(UserContext);
  const [hovered, setHovered] = useState(false);
  const data = product[0];
  let name = data.product;
  const { price } = data;

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async () => setCart([...cart, data]);

  return (
    <>
      <Navigation />
      <div className="h-full mt-16 lg:mt-32 flex justify-center items-center">
        <div className="h-full flex flex-col lg:flex-row justify-evenly lg:justify-center items-center">
          <div className="mx-auto lg:m-0 lg:w-1/2">
            <Image
              src="/shoe.jpeg"
              height={800}
              width={800}
              className="lg:rounded-full"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:h-auto flex flex-col justify-between lg:justify-around items-center bg-white m-4 lg:shadow-2xl lg:bg-gray-100">
            <h1 className="text-xl lg:text-2xl font-bold pt-8 text-center">
              {name}
            </h1>
            <p className="text-gray-400 p-8 m-4 text-sm lg:text-md font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button
              disabled={
                cart.filter((c) => c.product === data.product).length > 0
              }
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => addToCart()}
              className="bg-black text-white w-4/5 p-4 hover:bg-gray-500 rounded-xl mb-4 transition duration-300 disabled:opacity-75 focus:outline-none disabled:cursor-not-allowed"
            >
              {hovered ? <span>${`${price}`}</span> : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/MOCK_DATA.json`);
  const data = await res.json();
  const product = data.filter((item) => item.product === id);

  return {
    props: { product },
  };
};

export const getStaticPaths = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/MOCK_DATA.json`);
  const data = await res.json();

  const paths = data.map((item) => {
    return { params: { id: item.product } };
  });

  return { paths, fallback: false };
};

export default Product;
