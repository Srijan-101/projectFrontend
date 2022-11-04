import limg from './Images/login.jpg'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import jwtDecode from 'jwt-decode'
import { useState } from 'react'
import MessageDisplay from './Helper/MessageDisplay'
import axios from 'axios'

import {authenticate, isAuth} from '../Helper/helper'


const Login = () => {
    const MessageType = {
        message: '',
        type: 'is-primary',
        error: false
    }

    const InitialValue = {
        email: '',
        password: ''
    }
    
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(InitialValue);
    const [message, setMessage] = useState(MessageType);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

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
                    url: `${process.env.REACT_APP_API}/api/Login`,
                    data: {
                        password: values.password,
                        email: values.email,
                    }
                })
                 
            
                authenticate(data)
                navigate(from, { replace: true });
                setLoading(false);

            } catch (error) {
                  
                  if(typeof error.response.data.message == "string") setMessage({error: true,message:error.response.data.message,type: "is-danger"})
                  else{
                    error.response.data.message.forEach((ele) => {
                        setMessage({error: true,message:ele.msg,type: "is-danger"})
                    })
                  }
            }
            setLoading(false);
    }
 

    return (
        <div className='columns mt-6'>
            <div className='column is-two-fifths'>
                <div className='container mt-6 mb-6' style={{ marginLeft: "3.8rem" }}>
                    <h5 className='title is-6' style={{ color: 'grey' }}>
                        LOGIN
                    </h5>
                    <p className='subtitle is-3 mb-2' style={{ fontWeight: '500' }}>
                        Welcome back
                    </p>
                    <p className='subtitle is-6 ' style={{ color: 'grey' }}>
                        Login to manage you account
                    </p>
                </div>

                <div className='mr-6' style={{ marginLeft: "3.8rem" }}>
                {message.error ? <MessageDisplay message={message.message} type={message.type} /> : null}
                    <form onSubmit={onSubmit}>
                            <div className="field">
                                <p className="subtitle is-6 mb-3" style={{ 'color': "grey", "fontSize": "14px" }}>Enter your email</p>
                                <input className="input" type="email" onChange={onChange('email')} placeholder="name@company.com" style={{ 'height': "50px" }} required />
                            </div>
                            <div className="field mt-5">
                                <p className="subtitle is-6 mb-3" style={{ 'color': "grey", "fontSize": "14px", "float": "left" }} required>Enter your password</p>
                                <p className="subtitle is-6 mb-3" style={{ 'color': "grey", "fontSize": "14px", "float": "right" }}><Link to="/PasswordReset">
                                    Forgot your password?</Link></p>
                                <input className="input" onChange={onChange('password')} type="password" placeholder="*******" style={{ 'height': "50px" }} />
                            </div>
                            <button className="button is-primary mt-5" type="submit" disabled={loading ? true : false}>Login</button>
                            <p className="subtitle is-6 mt-5" style={{ 'color': "grey", "fontSize": "14px" }}>Don't have an account yet? <Link to="/Signup">Sign up here.</Link></p>
                    </form>
                </div>
            </div>

            <div className='column mt-6 mr-1'>

                <img
                    src={limg}
                    alt='desc'
                />
            </div>
        </div>

    )
}

export default Login;