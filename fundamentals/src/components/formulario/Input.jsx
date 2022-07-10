import {useState} from 'react';
import './Input.css';

function Input(){

    const [valor, setValor] = useState('Inicial');

    const handleValue = (valor) => {
        setValor(valor)
    }


    return(
        <div className='input'>
            <input value={valor} onChange={(e) => handleValue(e.target.value)}/>
        </div>
    )
};

export default Input;