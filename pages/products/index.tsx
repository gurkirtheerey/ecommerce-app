import React from "react";
import Head from "next/head";
import data from "../../public/MOCK_DATA.json";
import { Product } from "../../components/Product";
import { Navigation } from "../../components/Navigation";

export async function getStaticProps() {
  const response = await data;
  return {
    props: {
      data: response,
    },
  };
}

const Products = ({ data, session }) => {
  console.log("PAGE PROPS: ", session);
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <>
        <Navigation />
        <div className="h-32">
          <h1>Today's Deals</h1>
        </div>
        <div className="flex grid grid-cols-6 gap-4">
          {data.map((res) => (
            <React.Fragment key={res.id}>
              <Product
                image={res.image}
                product={res.product}
                price={res.price}
                quantity={res.quantity}
              />
            </React.Fragment>
          ))}
        </div>
      </>
    </>
  );
};

export default Products;
