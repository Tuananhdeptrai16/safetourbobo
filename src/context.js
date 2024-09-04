import { createContext } from "react";
const store = {
  name: "bobo",
};
const StoreContext = createContext(store);
export default StoreContext;
