import axios from "axios";

const API = "http://localhost:3000/api/reports";

export const obtenerReporte = async () => {

    const { data } = await axios.get(API);

    return data;

};