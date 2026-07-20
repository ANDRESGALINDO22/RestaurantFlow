import axios from "axios";

const API = "http://192.168.56.1:3000/api/tables";

export const obtenerMesas = async () => {

    const { data } = await axios.get(API);

    return data;

};

export const crearMesa = async (mesa) => {

    const { data } = await axios.post(API, mesa);

    return data;

};

export const actualizarMesa = async (id, mesa) => {

    const { data } = await axios.put(`${API}/${id}`, mesa);

    return data;

};

export const eliminarMesa = async (id) => {

    const { data } = await axios.delete(`${API}/${id}`);

    return data;

};