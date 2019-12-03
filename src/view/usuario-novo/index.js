import React, {useState} from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth'

import './usuario-novo.css'

function NovoUsuario() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function cadastrar() {
        firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado=>{
            alert('usuario cadastrado')
        }).catch(erro=>{
            alert('algo deu errado')
        })
    }
    return(
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-white font-weight-bold'>Cadastro</h1>

                <input onChange={(e)=>setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='email'></input>
                <input onChange={(e)=>setSenha(e.target.value)} type='password' className='form-control my-2' placeholder='senha'></input>

                <button type ='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro' onClick={cadastrar}>Cadastrar</button>

            </form>
        </div>
    )
};

export default NovoUsuario;