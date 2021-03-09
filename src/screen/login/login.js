import React from 'react';
import './login.css';
import IdentForm from "../../composant/identFormcmp/identFormCmp";

const Login = () => {
    return (
        <div className='login_container'>
            <h1>identifiez-vous SVP</h1>
            <IdentForm/>
        </div>
    )
}


export default Login;
