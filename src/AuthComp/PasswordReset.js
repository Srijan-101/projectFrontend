import simg from './Images/signup.jpg'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import MessageDisplay from './Helper/MessageDisplay'
import axios from 'axios'



const PasswordReset = () => {
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

    const onChange = name => event => {
        setValues((prevState) => {
            return { ...prevState, [name]: event.target.value }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
            try {
                const data = await axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_API}/api/ResetPassword`,
                    data: {
                        email: values.email,
                    }
                })
                console.log(data.data);
                setMessage({ error: true, message:data.data.message, type: "is-primary"})
                setLoading(false);
                setValues(InitialValue);
            } catch (error) {
                 console.log(error.response);
                 setMessage({error: true,message:error.response.data.message,type: "is-danger"})    
            }
            setLoading(false);
    }

    return (
        <div className="columns mt-6">
            <div className="column is-two-fifths mt-6">
                    <div className="container mt-6 mb-6" style={{ marginLeft: "3.8rem" }}>
                        <h5 className="title is-6" style={{ 'color': "grey" }}>RECOVER ACCOUNT</h5>
                        <p className="subtitle is-3 mb-2" style={{ 'fontWeight': '500' }}>Forgot your password?</p>
                        <p className="subtitle is-6 " style={{ 'color': "grey" }}>Enter your email address below and we'll get you back on track.</p>
                    </div>
                <div className='mr-6' style={{ marginLeft: "3.8rem" }}>
                {message.error ? <MessageDisplay message={message.message} type={message.type} /> : null}
                        <form onSubmit={onSubmit}>
                            <div className="field">
                                <p className="subtitle is-6 mb-3" style={{ 'color': "grey", "fontSize": "14px" }}>Enter your email</p>
                                <input
                                className='input'
                                type='email'
                                placeholder='Name@company.com'
                                onChange={onChange('email')}
                                value={values.email}
                                style={{ height: '50px' }}
                                required
                            />
                            </div>
                            <button type="submit" className="button is-primary mt-5" disabled={loading ? true : false}>Send reset link</button>
                            <p className="subtitle is-6 mt-5" style={{ 'color': "grey", "fontSize": "14px" }}><Link to="/"> Back to Login</Link></p>
                        </form>
                </div>
            </div>
                <div className="column mt-4">
                    <img src={simg} alt="desc" />
                </div>
        </div>
     )
}

export default PasswordReset;