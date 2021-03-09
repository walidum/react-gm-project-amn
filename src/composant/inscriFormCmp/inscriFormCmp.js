import React, {useState} from 'react';
import './inscriFormCmp.css';
import {Button, FormControl, Input} from "@material-ui/core";

const InscriForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirmPassWord, setConfirmPassword] = useState('');
    return (
        <div className='inscriContainer'>
            <h1>Nouvel utilisateur</h1>
            <h2>Créeé votre compte</h2>
            <FormControl className="form_inscri">
                <Input type='String' name='firstName' placeholder='First name'
                       onChange={(e) => setFirstName(e.target.value)}></Input>
                <Input type='String' name='lastName' placeholder='Last name'
                       onChange={(e) => setLastName(e.target.value)}></Input>
                <Input type='String' name='email' placeholder="Votre mail"
                       onChange={(e) => setEmail(e.target.value)}> </Input>
                <Input type='passWord' name='passWord' placeholder="mot de passe"
                       onChange={(e) => setPassWord(e.target.value)}> </Input>
                <Input type='passWord' name='confirmPassWord' placeholder="confirmez le mot de passe"
                       onChange={(e) => setConfirmPassword(e.target.value)}> </Input>
                <Button>Envoyer</Button>
            </FormControl>

        </div>
    );
}

export default InscriForm;
