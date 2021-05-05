import { createContext } from "react";

const UserContext = createContext({
  user: { name: "", password: "" },
  cart: [],
});

export default UserContext;
