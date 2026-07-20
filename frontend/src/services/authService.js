import axios from "axios";

const API = "http://192.168.56.1:3000/api/auth";

export const login = async (correo, password) => {
    const { data } = await axios.post(`${API}/login`, {
        correo,
        password
    });

    return data;
};