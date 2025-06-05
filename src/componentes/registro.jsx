import React from 'react';
import './registro.css';

function Registrar (){
    return (

        
        <div className="container">
        
        <h1>Registrate Aqui:</h1>
        
        <form className='formulario'>
            <div>
                <label>Nombre:</label>
                <input type='text' name='nombre'/>
            </div>

            <div>
                <label>Apellido:</label>
                <input type='text' name='apellido'/>
            </div>
            <div>
                <label>Email:</label>
                <input type='email' name='email'/>
            </div>
            <div>
                <label>Telefono:</label>
                <input type='tel' name='telefono'/>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' name='passwor'/>
            </div>
            <div>
                <label>Confirmar Password:</label>
                <input type='password' name='confpaswword'/>
            </div>

            <button type='submit'> Enviar </button>
        </form>

        </div>
        
    );
}
export default Registrar
