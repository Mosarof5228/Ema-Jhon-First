import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../assets/components/Providers/AuthProvider';

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <div>Loading....</div>
    }
    if (user) {
        return children;
    }
    return (
        <div>
            return <Navigate to='/login' state={{ from: location }} replace='true'></Navigate>
        </div>
    );
};

export default PrivetRout;