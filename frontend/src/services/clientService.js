import axios from "axios";

const API_PRODUCTS = "http://192.168.56.1:3000/api/products";
const API_ORDERS = "http://192.168.56.1:3000/api/orders";
const API_DETAIL = "http://192.168.56.1:3000/api/detail-orders";

export const obtenerMenu = async () => {

    const { data } = await axios.get(API_PRODUCTS);

    return data;

};

export const crearPedido = async (pedido) => {

    const { data } = await axios.post(API_ORDERS, pedido);

    return data;

};

export const crearDetallePedido = async (detalle) => {

    const { data } = await axios.post(API_DETAIL, detalle);

    return data;

};