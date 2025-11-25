import axios from 'axios';

const BASE_URL = 'https://autaza-api-ouyea.onrender.com/api/v1/imagen';

class ImagenService {

    getAllImagens() {
        return axios.get(BASE_URL);
    }

    getImagenById(idImagen) {
        return axios.get(`${BASE_URL}/${idImagen}`);
    }

    createImagen(imagen) {
        return axios.post(BASE_URL, imagen);
    }

    updateImagen(idImagen, imagen) {
        return axios.put(`${BASE_URL}/${idImagen}`, imagen);
    }

    deleteImagen(idImagen) {
        return axios.delete(`${BASE_URL}/${idImagen}`);
    }

}
export default new ImagenService();
  