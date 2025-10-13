import { Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import CartList from '../components/organisms/CartList';

function Carrito() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePay = () => {
    alert("¡Gracias por tu compra!");
    clearCart();
  };

  return (
    <Container className="my-5">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <Text>No hay productos en el carrito.</Text>
      ) : (
        <>
          <CartList items={cartItems} onRemove={removeFromCart} />
          <h3>Total: ${totalPrice}</h3>
          <Button variant="success" onClick={handlePay} className="me-2">Pagar</Button>
          <Button variant="secondary" onClick={clearCart}>Vaciar Carrito</Button>
        </>
      )}
      <Button variant="primary" back className="mt-3">Volver</Button>
    </Container>
  );
}

export default Carrito;