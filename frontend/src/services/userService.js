import axios from "axios";

const API = "http://localhost:3000/api/users";

export const obtenerUsuarios = async () => {
    const { data } = await axios.get(API);
    return data;
};

export const crearUsuario = async (usuario) => {
    const { data } = await axios.post(API, usuario);
    return data;
};

export const eliminarUsuario = async (id) => {
    const { data } = await axios.delete(`${API}/${id}`);
    return data;
};

export const actualizarUsuario = async (id, usuario) => {
    const { data } = await axios.put(`${API}/${id}`, usuario);
    return data;
};