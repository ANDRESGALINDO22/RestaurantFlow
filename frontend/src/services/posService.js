import axios from "axios";

const API_PRODUCTS = "http://localhost:3000/api/products";
const API_TABLES = "http://localhost:3000/api/tables";

export const obtenerProductos = async () => {
    const { data } = await axios.get(API_PRODUCTS);
    return data;
};

export const obtenerMesas = async () => {
    const { data } = await axios.get(API_TABLES);
    return data;
};