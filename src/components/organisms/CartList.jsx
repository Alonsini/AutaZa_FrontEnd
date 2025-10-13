import React from "react";
import CartItem from "../molecules/Cartitem";

function CartList({ items, onRemove }) {
  return (
    <>
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </>
  );
}

export default CartList;