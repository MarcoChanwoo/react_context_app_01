import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Itemcomponents = orderType === "products" ? Products : null;

  const optionItems = items.map((item) => <Itemcomponents />);

  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격: </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "option" ? "column" : "row",
        }}
      >
        Item
      </div>
    </div>
  );
};

export default Type;
