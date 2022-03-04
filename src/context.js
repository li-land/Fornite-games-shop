import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const GoodsContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShowfalse: false,
  namePrompt: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addtoCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  value.handleCartShow = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  value.removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: id } });
  };

  value.changeQuantity = (id, bool) => {
    dispatch({ type: "CHANGE_QUANTITY", payload: { id: id, bool: bool } });
  };

  value.closePrompt = () => {
    dispatch({ type: "CLOSE_PROMPT" });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return (
    <GoodsContext.Provider value={value}>{children}</GoodsContext.Provider>
  );
};
