import axios from 'axios';

const BASE_URL = 'https://autaza-api-ouyea.onrender.com/api/v1/venta';

class VentaService {

    getAllVenta() {
        return axios.get(BASE_URL);
    }

    getVentaById(idVenta) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createVenta(venta) {
        return axios.post(BASE_URL, venta);
    }

    updateVenta(idVenta, venta) {
        return axios.put(`${BASE_URL}/${id}`, venta);
    }

    deleteVenta(idVenta) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new VentaService();