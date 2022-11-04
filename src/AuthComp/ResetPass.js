import limg from './Images/login.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MessageDisplay from './Helper/MessageDisplay'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const ResetPassword = () => {

    const params = useParams();
    const MessageType = {
        message: '',
        type: 'is-primary',
        error: false
    }

    const InitialValue = {
        token: '',
        password: '',
        repassword: '',
        email: ''
    }

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(InitialValue);
    const [message, setMessage] = useState(MessageType);
    const navigate = useNavigate();

    useEffect(() => {
        let token = params.token;
        const { email } = jwtDecode(token);
        setValues((prevState) => {
            return { ...prevState, email: email, token: token }
        })
    }, [])

    const onChange = name => event => {
        setValues((prevState) => {
            return { ...prevState, [name]: event.target.value }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (values.password !== values.repassword) {
            setMessage({ error: true, message: 'Please make sure your password match.', type: "is-danger" })
            setLoading(false);
        } else {
            try {
                const data = await axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_API}/api/ChangePassword`,
                    data: {
                        password: values.password,
                        token: values.token
                    }
                })
                setMessage({ error: true, message: data.data.message, type: "is-primary" })
                setLoading(false);
                setValues(InitialValue);
            } catch (error) {
                setMessage({ error: true, message: error.response.data.error, type: "is-danger" })
            }
            setLoading(false);
            setTimeout(function () {
                navigate("/");
            }, 3000);
        }
    }

    return (
        <div className='columns mt-2'>
            <div className='column is-two-fifths'>
                <div className='container m-6'>
                    <h5 className='title is-6' style={{ color: 'grey' }}>
                        RESET PASSWORD
                    </h5>
                    <p className='subtitle is-6 mt-2' style={{ color: 'grey' }}>
                        <span class="title is-4">{values.email}</span>,Enter your new password and manage your account.
                    </p>

                </div>


                <div className='m-6'>

                    {message.error ? <MessageDisplay message={message.message} type={message.type} /> : null}
                    <form onSubmit={onSubmit}>
                        <div className='field mt-5'>
                            <p
                                className='subtitle is-6 mb-3'
                                style={{ color: 'grey', fontSize: '14px', float: 'left' }}
                            >
                                New password
                            </p>
                            <input
                                className='input'
                                onChange={onChange('password')}
                                type='password'
                                value={values.password}
                                placeholder='Password'
                                style={{ height: '50px' }}
                                required
                            />
                        </div>
                        <div className='field mt-5'>
                            <p
                                className='subtitle is-6 mb-3'
                                style={{ color: 'grey', fontSize: '14px', float: 'left' }}
                            >
                                Reenter password
                            </p>
                            <input
                                className='input'
                                onChange={onChange('repassword')}
                                type='password'
                                value={values.repassword}
                                placeholder='Reenter password'
                                style={{ height: '50px' }}
                                required
                            />
                        </div>

                        <button type='submit' className='button is-primary mt-5' disabled={loading ? true : false}>
                            Submit
                        </button>
                        <p
                            className='subtitle is-6 mt-5'
                            style={{ color: 'grey', fontSize: '14px' }}
                        >
                            Remembered your password? <Link to='/'>Login here.</Link>
                        </p>
                    </form>
                </div>
            </div>

            <div className='column mt-6'>
                <img
                    src={limg}
                    alt='desc'
                    className='mt-6'
                    style={{ padding: '6%' }}
                />
            </div>
        </div>
    )
}

export default ResetPassword;