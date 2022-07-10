import {useState} from 'react';
import DisplayMega from './DisplayMega';
import InputValor from './InputValor';
import Button from './Button';
import './style.css';



function Mega(){

    const [valores, setValores] = useState([]);
    const [qtd, setQtd] = useState(null);
    const [id, setId] = useState(0);

    const handleValores = (qtd) => {
        
        let valoresGerados = [];
       
        for(let i = 1; i <= qtd; i++){

            let num = Math.floor(Math.random() * 60);
            valoresGerados.push(num);
        }

        setValores(valoresGerados);
    }

   

    return(
        <div>
            <DisplayMega setValores={valores}/>

           <div className='controll'>
                <InputValor setQtd={setQtd}/>

                <Button handleValores={handleValores} qtd={qtd} />
           </div>
           
        </div>
    )
};

export default Mega;