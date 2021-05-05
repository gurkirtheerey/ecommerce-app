import React from "react";

const Product = ({ product }) => {
  const data = product[0];
  return <div>{data.id}</div>;
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
