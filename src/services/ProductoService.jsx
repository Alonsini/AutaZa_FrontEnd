import axios from 'axios';

const BASE_URL = 'https://autaza-api-ouyea.onrender.com/api/v1/producto';

class ProductoService {

    getAllProductos() {
        return axios.get(BASE_URL);
    }

    getProductoById(idProducto) {
        return axios.get(`${BASE_URL}/${idProducto}`);
    }

    createProducto(producto) {
        return axios.post(BASE_URL, producto);
    }

    updateProducto(idProducto, producto) {
        return axios.put(`${BASE_URL}/${idProducto}`, producto);
    }

    deleteProducto(idProducto) {
        return axios.delete(`${BASE_URL}/${idProducto}`);
    }

}
export default new ProductoService();
  