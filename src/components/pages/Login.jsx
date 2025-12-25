import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContex } from '../../provider/AuthProvider';

const Login = () => {

    return (
        <div className='flex mt-2 md:mt-12 lg:mt-32 justify-center'>
            <div className="p-4  card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl font-semibold text-center'>Login your account</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <h3 className='text-accent text-center font-medium'>Dont’t Have An Account ?  <Link to='/auth/register' className='text-secondary font-medium'>Register</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Login;