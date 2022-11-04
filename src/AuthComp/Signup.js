import simg from './Images/signup.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MessageDisplay from './Helper/MessageDisplay'
import axios from 'axios'


const Signup = () => {

    const MessageType = {
        message: '',
        type: 'is-primary',
        error: false
    }

    const InitialValue = {
        firstName: '',
        lastName: '',
        email: '',
        role: 'Worker',
        password: '',
        repassword: '',
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
        if (values.password !== values.repassword) {
            setMessage({ error: true, message: 'Please make sure your password match.', type: "is-danger" })
            setLoading(false);
        } else {
            try {
                const data = await axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_API}/api/Signup`,
                    data: {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        password: values.password,
                        email: values.email,
                        role: values.role
                    }
                })
                setMessage({ error: true, message:data.data.message, type: "is-primary"})
                setLoading(false);
                setValues(InitialValue);
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
    }

    return (
        <div className='columns mt-1'>
            <div className='column is-two-fifths'>
                <div className='container mt-6 mb-6' style={{ marginLeft: "3.8rem" }}>
                    <h5 className='title is-6' style={{ color: 'grey' }}>
                        SIGNUP
                    </h5>
                    <p className='subtitle is-3 mb-2' style={{ fontWeight: '500' }}>
                        Create an account
                    </p>
                    <p className='subtitle is-6 ' style={{ color: 'grey' }}>
                        Fill out the form to get started.
                    </p>
                </div>
                <div className='mr-6' style={{ marginLeft: "3.8rem" }}>

                    {message.error ? <MessageDisplay message={message.message} type={message.type} /> : null}

                    <form onSubmit={onSubmit}>
                        <div className='columns'>
                            <div className='column'>
                                <div className='field'>
                                    <p
                                        className='subtitle is-6 mb-3'
                                        style={{ color: 'grey', fontSize: '14px' }}
                                    >
                                        Enter your first name
                                    </p>
                                    <input
                                        className='input'
                                        type='text'
                                        onChange={onChange('firstName')}
                                        value={values.firstName}
                                        placeholder='First name'
                                        style={{ height: '45px' }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='column'>
                                <p
                                    className='subtitle is-6 mb-3'
                                    style={{ color: 'grey', fontSize: '14px' }}
                                >
                                    Enter your last name
                                </p>
                                <input
                                    className='input'
                                    type='text'
                                    placeholder='Last name'
                                    onChange={onChange('lastName')}
                                    value={values.lastName}
                                    style={{ height: '45px' }}
                                    required
                                />
                            </div>
                        </div>

                        <div className='field'>
                            <p
                                className='subtitle is-6 mb-3'
                                style={{ color: 'grey', fontSize: '14px' }}
                            >
                                Enter your email
                            </p>
                            <input
                                className='input'
                                type='email'
                                placeholder='Name@company.com'
                                onChange={onChange('email')}
                                value={values.email}
                                style={{ height: '45px' }}
                                required
                            />
                        </div>
                        <div className='field mt-5'>
                            <p
                                className='subtitle is-6 mb-3'
                                style={{ color: 'grey', fontSize: '14px', float: 'left' }}
                            >
                                New password
                            </p>
                            <input
                                className='input'
                                type='password'
                                placeholder='*********'
                                onChange={onChange('password')}
                                value={values.password}
                                style={{ height: '45px' }}
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
                                type='password'
                                placeholder='*********'
                                onChange={onChange('repassword')}
                                value={values.repassword}
                                style={{ height: '45px' }}
                                required
                            />
                        </div>
                        <div className='field mt-5'>
                            <p
                                className='subtitle is-6 mb-3'
                                style={{ color: 'grey', fontSize: '14px', float: 'left' }}
                            >
                                Select right designation
                            </p>
                        </div>
                        <div className="control">
                            <div className="select">
                                <select name="role" onChange={onChange('role')}>
                                    <option value="Worker">Worker</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>

                        </div>

                        <button type='submit' className='button is-primary mt-5' disabled={loading ? true : false}>
                            Submit
                        </button>
                    </form>
                    <p
                        className='subtitle is-6 mt-5'
                        style={{ color: 'grey', fontSize: '14px' }}
                    >
                        Already have an account? <Link to='/'>Login here.</Link>
                    </p>
                </div>
            </div>

            <div className='column mt-6'>

                <img
                    src={simg}
                    alt='desc'
                    className='mt-6'
                />
            </div>
        </div>
    )
}

export default Signup;