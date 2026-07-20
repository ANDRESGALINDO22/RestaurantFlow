import axios from "axios";

const API = "http://192.168.56.1:3000/api/products";

export const obtenerProductos = async () => {

    const { data } = await axios.get(API);

    return data;

};

export const crearProducto = async (producto) => {

    const { data } = await axios.post(API, producto);

    return data;

};

export const actualizarProducto = async (id, producto) => {

    const { data } = await axios.put(`${API}/${id}`, producto);

    return data;

};

export const eliminarProducto = async (id) => {

    const { data } = await axios.delete(`${API}/${id}`);

    return data;

};