import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

export default function Login() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");

    const [password, setPassword] = useState("");

    const ingresar = async () => {

        try {

            const data = await login(correo, password);

            localStorage.setItem("token", data.token);

            localStorage.setItem("usuario", JSON.stringify(data.usuario));

            navigate("/dashboard");

        } catch (error) {

            alert("Correo o contraseña incorrectos");

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex justify-center items-center">

            <div className="bg-slate-900 p-10 rounded-2xl w-[420px]">

                <h1 className="text-white text-4xl font-bold text-center">

                    RestaurantFlow

                </h1>

                <input

                    className="w-full mt-8 p-3 rounded-xl"

                    placeholder="Correo"

                    value={correo}

                    onChange={(e)=>setCorreo(e.target.value)}

                />

                <input

                    type="password"

                    className="w-full mt-4 p-3 rounded-xl"

                    placeholder="Contraseña"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                />

                <button

                    onClick={ingresar}

                    className="w-full mt-6 bg-blue-600 text-white p-3 rounded-xl"

                >

                    Iniciar sesión

                </button>

            </div>

        </div>

    );

}