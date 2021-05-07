import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import data from "../../public/MOCK_DATA.json";
import { Product } from "../../components/Product";
import { Navigation } from "../../components/Navigation";
import UserContext from "../../context/userContext";
import parseCookies from "../../lib/parseCookies";
import { useSession } from "next-auth/client";
import { LoginPage } from "../../components/LoginPage";

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  return { props: { cartCookie: cookies?.cart ? cookies.cart : null, data } };
}

const Products = ({ data, cartCookie }) => {
  const [active, setActive] = useState(false);
  const [session, loading] = useSession();
  const { setCart } = useContext(UserContext);

  useEffect(() => {
    if (cartCookie !== null) {
      setCart(JSON.parse(cartCookie));
    }
  }, []);

  if (!session) {
    return <LoginPage />;
  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Navigation />
      <div className={`z-0 ${active && "overflow-y-hidden"}`}>
        <div className="h-32 flex justify-center items-center">
          <h1 className="text-3xl font-bold italic">
            Today's Featured Products...
          </h1>
        </div>
        <div className="flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 lg:gap-6 place-items-center overflow-hidden">
          {data &&
            data.length > 0 &&
            data.map((res) => (
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
      </div>
    </>
  );
};

export default Products;
