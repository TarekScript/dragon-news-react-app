import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../components/pages/LoadingPage';
import { AuthContex } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = use(AuthContex);
    const location = useLocation();
    if (loader) {
        return <LoadingPage></LoadingPage>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;