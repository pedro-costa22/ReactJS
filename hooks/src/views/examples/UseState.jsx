import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTittle from '../../components/layout/SectionTitle';

const UseState = (props) => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Initial...");


    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTittle title="Exercicio #01 - Contator"/>
            <div className='center'>
                <span className='text'>{count}</span>
                <div>
                    <button className='btn' onClick={() => setCount(count - 1)}>-1</button>
                    <button className='btn' onClick={() => setCount(count + 1)}>+1</button>
                    <button className='btn' onClick={() => setCount(currect => currect + 1000)}>+1000</button>
                </div>
            </div>


            <SectionTittle title="Exercicio #02 - "/>
            <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default UseState;
