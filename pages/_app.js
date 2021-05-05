import { Provider } from "next-auth/client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import UserContext from "../context/userContext";

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState({ email: "", username: "" });
  const [cart, setCart] = useState([]);

  return (
    <Provider session={pageProps.session}>
      <UserContext.Provider value={{ user, cart, setUser, setCart }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </Provider>
  );
};

export default MyApp;
