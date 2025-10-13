import React from "react";
import Text from '../atoms/Text';
import Button from "../atoms/Button";

function CartItem({ item, onRemove }) {
  return (
    <div className="mb-3 p-3 border rounded">
      <h5>{item.name}</h5>
      <Text>Cantidad: {item.quantity}</Text>
      <Text>Precio: ${item.price}</Text>
      <Text>Subtotal: ${item.price * item.quantity}</Text>
      <Button variant="danger" onClick={() => onRemove(item.id)}>
        Eliminar
      </Button>
    </div>
  );
}

export default CartItem;