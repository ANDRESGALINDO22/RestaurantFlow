import axios from "axios";

const API = "http://localhost:3000/api/inventory";

export const obtenerInventario = async () => {

    const { data } = await axios.get(API);

    return data;

};

export const crearInventario = async (inventario) => {

    const { data } = await axios.post(API, inventario);

    return data;

};

export const actualizarInventario = async (id, inventario) => {

    const { data } = await axios.put(`${API}/${id}`, inventario);

    return data;

};

export const eliminarInventario = async (id) => {

    const { data } = await axios.delete(`${API}/${id}`);

    return data;

};