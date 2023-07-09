import { useState } from "react";
import "../App.css";
import axios from "axios";
import { message } from "antd";
import { Link } from "react-router-dom";
import './participant.css'

export default function AddParticipant() {
     const [messageApi, contextHolder] = message.useMessage();
    const [nom, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");
    const checkEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            messageApi.error('email invalid');
            return false
        }
        return true
       
    };
    const checkNumero = () => {
    // regex pour verifier le numero de telephone
        const numeroRegex = /^(01|05|07)\d{8}$/;
;
        if (!numeroRegex.test(numero)) {
            messageApi.error('numero invalide');
            return false
        }
        return true
    };
    const FormSubmit =async (e) => {
        e.preventDefault();
        const data = { nom, prenom, numero, email };
        if (
            !nom ||
            !prenom ||
            !numero ||
            !email ||
            !checkEmail() ||
            !checkNumero()
        ) {
            return messageApi.error("merci de remplir tout les champs correctement");
        }
     const response = await  axios
            .post(
                "https://simplon-testserver-production.up.railway.app/api/participant/ajouter",
                data
            )
            .then((res) => {
                console.log(res.data);
               let message = res.data.message;
              const resp=  messageApi.success(message);
                setName("");
                setPrenom("");
                setNumero("");
                setEmail("");
                return resp;
            })
            .catch((err) => {
                let message = err.response.data.message;
                console.log(err.response)
                const error = messageApi.error(message);
                return error;
            });
        // aller a la page list
        window.location.href = "/";
    };
    return (
        <div className="userDetail-container">
            <div className="window">
                <div className="content">
                    <div className="welcome">Emargement</div>
                    {contextHolder}
                    <div className="subtitle">
                        merci de renseigner vos informations correctement
                    </div>
                    <div className="input-fields">
                        <label>
                            Nom
                            <input
                                type="text"
                                placeholder="votre Nom "
                                className="input-line full-width"
                                value={nom}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </label>
                        <label>
                            prenom
                            <input
                                type="text"
                                placeholder="votre Prenom "
                                className="input-line full-width"
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                            ></input>
                        </label>
                        <label>
                            numero de telephone
                            <input
                                type="number"
                                placeholder="ex: 0707101010"
                                className="input-line full-width"
                                value={numero}
                                onBlur={checkNumero}
                                onChange={(e) => setNumero(e.target.value)}
                            ></input>
                        </label>
                        <label>
                            Email
                            <input
                                type="email"
                                className="input-line full-width"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                onBlur={checkEmail}
                                placeholder="ex: Jean@gmail.com"
                            ></input>
                        </label>
                    </div>
                    <div className="control">
                        <div>
                            <button onClick={FormSubmit} className=" btn">
                                Valider
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
