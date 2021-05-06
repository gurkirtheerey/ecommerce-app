import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
  const data = product[0];
  let p = data.product;
  const { price, quantity } = data;
  return (
    <div className="h-screen bg-gray-200 overflow-y-hidden">
      <div className="h-full flex justify-center items-center">
        <div className="m-4 w-1/2">
          <Image
            src="/shoe.jpeg"
            height={1200}
            width={1200}
            className="rounded-2xl"
          />
        </div>
        <div className="w-1/2 h-3/5 flex flex-col justify-between items-center bg-white m-4 shadow-2xl rounded-xl">
          <h1 className="text-4xl mt-4">{p}</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <span>{price}</span>
          <button className="bg-gray-800 text-white w-full p-4 hover:bg-black rounded-b-xl">
            Buy
          </button>
        </div>
      </div>
    </div>
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
