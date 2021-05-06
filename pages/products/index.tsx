import React, { useState } from "react";
import Head from "next/head";
import data from "../../public/MOCK_DATA.json";
import { Product } from "../../components/Product";
import { Navigation } from "../../components/Navigation";
import { Modal } from "../../components/Modal/Modal";
import { useContext } from "react";
import UserContext from "../../context/userContext";

export async function getStaticProps() {
  const response = await data;
  return {
    props: {
      data: response,
    },
  };
}

const Products = ({ data }) => {
  const [active, setActive] = useState(false);
  const { cart } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      {active && (
        <Modal
          toggleOff={() => setActive(false)}
          item={cart[cart.length - 1]}
        />
      )}
      <div className={`z-0 ${active && "overflow-y-hidden"}`}>
        <Navigation />
        <div className="h-32 flex justify-center items-center">
          <h1 className="text-3xl font-bold italic">
            Today's Featured Products...
          </h1>
        </div>
        <div className="flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4 lg:gap-6 place-items-center">
          {data.map((res) => (
            <React.Fragment key={res.id}>
              <Product
                image={res.image}
                product={res.product}
                price={res.price}
                quantity={res.quantity}
                onClick={() => setActive(!active)}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
