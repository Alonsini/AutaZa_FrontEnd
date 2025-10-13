import React, { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import Button from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addProduct({ ...form, price: Number(form.price) });
    navigate("/products");
  };

  return (
    <div className="container my-5">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Título</label>
        <input
          name="name"
          placeholder="Título del producto"
          value={form.name}
          onChange={handleChange}
          required
          className="form-control mb-2"
        />
        <label className="form-label">Descripción</label>
        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          required
          className="form-control mb-2"
        />
        <label className="form-label">Precio</label>
        <input
          name="price"
          type="number"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          required
          className="form-control mb-2"
        />
        <label className="form-label">URL de imagen</label>
        <input
          name="image"
          placeholder="Pega aquí la URL de la imagen"
          value={form.image}
          onChange={handleChange}
          required
          className="form-control mb-2"
        />
        {form.image && (
          <div className="mb-3">
            <img src={form.image} alt="Vista previa" style={{ maxWidth: 200 }} />
          </div>
        )}
        <Button type="submit" variant="success">Agregar</Button>
      </form>
    </div>
  );
}

export default AddProduct;