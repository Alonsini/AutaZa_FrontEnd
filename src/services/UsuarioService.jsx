import axios from 'axios';

const BASE_URL = 'https://autaza-api-ouyea.onrender.com/api/v1/usuario';

class UsuarioService {

    getAllUsuarios() {
        return axios.get(BASE_URL);
    }

    getUsuarioById(idUsuario) {
        return axios.get(`${BASE_URL}/${idUsuario}`);
    }

    createUsuario(usuario) {
        return axios.post(BASE_URL, usuario);
    }

    updateUsuario(idUsuario, usuario) {
        return axios.put(`${BASE_URL}/${idUsuario}`, usuario);
    }

    deleteUsuario(idUsuario) {
        return axios.delete(`${BASE_URL}/${idUsuario}`);
    }

}
  