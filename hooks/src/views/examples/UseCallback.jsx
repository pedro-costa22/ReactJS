import React, {useCallback, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './useCallbackButtons';


/* Retorna um callback memoizado.

Recebe como argumentos, um callback e um array. 
useCallback retornará uma versão memoizada do callback 
que só muda se uma das entradas tiverem sido alteradas. 
Isto é útil quando utilizamos callbacks a fim de otimizar 
componentes filhos, que dependem da igualdade de referência 
para evitar renderizações desnecessárias (como por exemplo 
shouldComponentUpdate). */

const UseCallback = (props) => {

    const [count, setCount] = useState(0);

    const inc =  useCallback((delta) => {
        setCount(current => current + delta);
    }, [setCount]);


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className='center'>
                <span className='text'>{count}</span>

                <UseCallbackButtons inc={inc}/>
                
            </div>
        </div>
    )
}

export default UseCallback
