import { createContext } from "react";

const OrderContext = createContext();

export function OrderContextProvider(props) {
  return <OrderContextProvider value {...props} />;
}
