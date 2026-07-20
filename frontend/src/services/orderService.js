import axios from "axios";

const API = "http://192.168.56.1:3000/api/orders";

export const obtenerPedidos = async () => {

    const { data } = await axios.get(API);

    return data;

};

export const crearPedido = async (pedido) => {

    const { data } = await axios.post(API, pedido);

    return data;

};

export const actualizarPedido = async (id, pedido) => {

    const { data } = await axios.put(`${API}/${id}`, pedido);

    return data;

};

export const eliminarPedido = async (id) => {

    const { data } = await axios.delete(`${API}/${id}`);

    return data;

};