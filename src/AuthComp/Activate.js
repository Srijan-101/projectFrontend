import axios from 'axios'
import { useEffect, useState } from 'react'
import { isAuth ,signOut} from '../Helper/helper'
import MessageDisplay from './Helper/MessageDisplay'
import eimg from './Images/email.jpeg'

const center = {
    "position": "absolute",
    "top": "40%",
    "left": "30%",
    "transform": "translate(-30%,-40%)"
}

const Activate = () => {

    const MessageType = {
        message: '',
        type: 'is-primary',
        error: false
    }

    const InitialValue = {
        email: '',
    }

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(InitialValue);
    const [message, setMessage] = useState(MessageType);

    useEffect(() => {
        setValues({ email: isAuth().email })
    }, [])

    const onResend = async () => {
             await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API}/api/ResendVerify`,
                data: {
                    email:values.email
                }
             }).then((res) => setMessage(
                 { error: true, message: res.data.message, type: "is-primary" })
             )
              .catch((e) => setMessage({error:true,message:e.data.message,type: "is-primary" }))
              
              setTimeout(function () { 
                signOut();
                window.location.reload();;
            }, 3000);
    }


    return (
        <div className="container" style={center}>
            <div className="columns">
                <div className="column is-three-fifths mt-5">
                {message.error ? <MessageDisplay message={message.message} type={message.type} /> : null}
                    <p className="subtitle is-4 mb-2" style={{ 'fontWeight': '500' }}>Welcome {isAuth().firstName},</p>
                    <p className="subtitle is-6 mb-4" style={{ 'color': "grey" }}>Activate your account to move futher.</p>
                    <p className="subtitle is-5" style={{ 'color': "grey", "letterSpacing": "0.4px" }}>We have send an email for verification.Please check your inbox.</p>
                    <p className="subtitle is-6 mt-6 mb-3" style={{ 'color': "grey", "fontSize": "14px" }}>Have't got any mail yet? </p>
                    <button className="button is-primary  is-small" onClick={onResend} disabled={loading ? true : false}>Resend verification link</button>
                </div>
                <div className="column is-two-thirds">
                    <img src={eimg} alt="desc" />
                </div>
            </div>
        </div>
    )
}

export default Activate;