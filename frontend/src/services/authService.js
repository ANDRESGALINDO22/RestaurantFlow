import axios from "axios";

const API = "http://localhost:3000/api/auth";

export const login = async (correo, password) => {
    const { data } = await axios.post(`${API}/login`, {
        correo,
        password
    });

    return data;
};