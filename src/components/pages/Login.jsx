import React, { use, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContex } from '../../provider/AuthProvider';

const Login = () => {
    const { loginUser, forgetsPassword } = use(AuthContex);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(result => {
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => console.log(error))
    }
    // reset password 
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        forgetsPassword(email)
            .then(result => {

            })
            .catch(error => {

            })
    }
    return (
        <div className='flex mt-2 md:mt-12 lg:mt-32 justify-center'>
            <div className="p-4  card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl font-semibold text-center'>Login your account</h1>
                <div className="card-body">
                    <form onSubmit={handleLogIn} className="fieldset">
                        <label className="label">Email</label>
                        <input ref={emailRef} name='email' required type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' required type="password" className="input" placeholder="Password" />
                        <div><a onClick={handleResetPassword} className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <h3 className='text-accent text-center font-medium'>Dont’t Have An Account ?  <Link to='/auth/register' className='text-secondary font-medium'>Register</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Login;