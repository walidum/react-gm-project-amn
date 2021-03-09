import React, {useState} from 'react';
import {Button, FormControl, Input} from "@material-ui/core";
import './identFormCmp.css';

const IdentForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='ident_container'>
            <h1>Déja inscris</h1>
            <h2>Identifiez-vous</h2>
            <br/>
            <FormControl className='form_ident'>
                <Input type='String' name='email' placeholder="Votre mail"
                       onChange={(e) => setEmail(e.target.value)}> </Input>
                <Input type='passWord' name='passWord' placeholder="mot de passe"
                       onChange={(e) => setPassword(e.target.value)}> </Input>
                <Button>Envoyer</Button>
            </FormControl>
        </div>
    )
}

export default IdentForm;
