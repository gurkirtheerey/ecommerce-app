import React from "react";
import Head from "next/head";
import data from "../../public/MOCK_DATA.json";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getStaticProps() {
  const response = await data;
  return {
    props: {
      data: response,
    },
  };
}

const Products = ({ data }) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        {data.map((res) => (
          <Link
            href={`/products/${encodeURIComponent(res.product)}`}
            key={res.id}
          >
            <p>{res.product}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
