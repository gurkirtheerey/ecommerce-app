import { createContext } from "react";

const UserContext = createContext({
  user: { name: "", password: "" },
  cart: [],
  setCart: ([]) => {},
});

export default UserContext;
