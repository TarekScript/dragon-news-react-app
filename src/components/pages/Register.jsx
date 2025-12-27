import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContex } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = use(AuthContex);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(result => {
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {

                    })
                    .catch(error => {
                        // console.log(error);
                    })
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='flex mt-2 md:mt-10 justify-center'>
            <div className="p-4  card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl font-semibold text-center'>Register your account</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* name  */}
                        <label className="label">Name</label>
                        <input required name='name' type="text" className="input" placeholder="Name" />

                        {/* Photo Url  */}
                        <label className="label">Photo Url</label>
                        <input required name='photo' type="text" className="input" placeholder="Phoot Url" />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input required name='email' type="email" className="input" placeholder="Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input required name='password' type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <h3 className='text-accent text-center font-medium'>Already Have An Account ?  <Link to='/auth/login' className='text-secondary font-medium'>Login</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Register;