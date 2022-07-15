import React, {useState, useEffect, useMemo} from 'react'
import PageTitle from '../../components/layout/PageTitle';

function sum(a, b){
    return a + b;
    
}


/* Use Memo é semelhante a uma junção do UseState e UseEffect, o primeiro parametro passado é a função que será executada e o segundo as dependecias. 
Recebe uma função create e um array como argumentos. O useMemo só recuperará o valor memoizado quando o array receber uma atualização. Esta otimização 
ajuda a evitar cálculos caros em cada renderização.
utilizado principalmente para melhorar performace de renderização.
*/

const UseMemo = (props) => {

    const [state, setState] = useState({
        n1: 0,
        n2: 0,
        n3: 0
    })

   /*let [result, setResult] = useState(0);

    useEffect(() => {

        setResult(sum(state.n1, state.n2))

    }, [state.n1, state.n2]) */

    const result = useMemo(() => sum(state.n1, state.n2), [state.n1, state.n2]);

  
   
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className='center'>
                <input type="number" className='input' value={state.n1} onChange={e => setState(old => ({...old, n1: parseInt(e.target.value)}))}/>
                <input type="number" className='input' value={state.n2} onChange={e => setState(old => ({...old, n2: parseInt(e.target.value)}))}/>
                <input type="number" className='input' value={state.n3} onChange={e => setState(old => ({...old, n3: parseInt(e.target.value)}))}/>
                <span className='text'>{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
