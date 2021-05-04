import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import data from "../../public/data.json";

const Product = ({ product }) => {
  const data = product[0];
  return <div>{data.id}</div>;
};

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/MOCK_DATA.json`);
  const data = await res.json();
  const product = data.filter((item) => item.product === id);
  console.log(product);
  return {
    props: { product },
  };
}

export async function getStaticPaths({ params }) {
  const res = await fetch(`http://localhost:3000/MOCK_DATA.json`);
  const data = await res.json();

  const paths = data.map((car) => {
    return { params: { id: car.product } };
  });

  return { paths, fallback: false };
}

export default Product;
