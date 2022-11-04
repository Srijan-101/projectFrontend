import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import limg from './Images/login.jpg'
import { useParams,useNavigate } from 'react-router-dom'


const center = {
    "position": "absolute",
    "top": "40%",
    "left": "30%",
    "transform": "translate(-30%,-40%)"
}

const ActivationJWT = () => {
    const MessageType = {
        message: '',
    }
    const InitialValue = {
        firstName: '',
        lastName: '',
        email: ''
    }

    const [message, setMessage] = useState(MessageType);
    const [values, setValues] = useState(InitialValue);
    const token = useParams().token;
    const navigate = useNavigate();


    const callActivateAction = async () => {
        return await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/api/Activateaccount`,
            data: {
                token
            }
        })
    }

    useEffect(() => {
        if (token) {
            const { email } = jwtDecode(token);
            setValues((prevState) => {
                return { ...prevState, email }
            })
            callActivateAction()
                .then((res) => {
                    console.log(res);
                    setMessage({message: res.data.message,type: "is-primary" })
                })
                .catch(e => {
                    setMessage({message: e.response.data.error})
                })
        }
        setTimeout(function () { navigate("/");
    }, 3000);
    }, [])

    return (
        <div className="container" style={center}>
            <div className="columns">

                <div className="column is-three-fifths mt-5">
                    <p className="subtitle is-4 mb-2" style={{ 'fontWeight': '500' }}>Welcome {values.email},</p>
                    <p className="subtitle is-6 " style={{ 'color': "grey" }}>{message.message}</p>
                </div>
                <div className="column is-two-thirds">
                    <img src={limg} alt="desc" />
                </div>
            </div>
        </div>
    )
}

export default ActivationJWT;