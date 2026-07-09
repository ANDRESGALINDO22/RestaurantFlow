import axios from "axios";

const API = "http://localhost:3000/api/kitchen";

export const obtenerPedidosCocina = async () => {

    const { data } = await axios.get(API);

    return data;

};

export const actualizarEstado = async (id, estado) => {

    const { data } = await axios.put(`${API}/${id}`, {
        estado
    });

    return data;

};