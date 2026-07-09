import axios from "axios";

const API = "http://localhost:3000/api/categories";

export const obtenerCategorias = async () => {

    const { data } = await axios.get(API);

    return data;

};

export const crearCategoria = async (categoria) => {

    const { data } = await axios.post(API, categoria);

    return data;

};

export const actualizarCategoria = async (id, categoria) => {

    const { data } = await axios.put(`${API}/${id}`, categoria);

    return data;

};

export const eliminarCategoria = async (id) => {

    const { data } = await axios.delete(`${API}/${id}`);

    return data;

};