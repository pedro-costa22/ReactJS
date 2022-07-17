import React, {useContext, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle';
import DataContext from '../../data/DataContext';
import SectionTitle from '../../components/layout/SectionTitle';
import { AppContext } from '../../data/Store';


/* Contexto (context) é indicado para compartilhar dados que podem ser considerados “globais” para 
a árvore de componentes do React. Usuário autenticado ou o idioma preferido, são alguns casos comuns. 
Contexto (context) é usado principalmente quando algum dado precisa ser acessado por muitos componentes 
em diferentes níveis. Use contexto moderadamente uma vez que isto pode dificultar a reutilização de componentes. */

const UseContext = (props) => {

    const context = useContext(DataContext);

    function setNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }
    

    const context2 = useContext(AppContext);

    useEffect(() => {
        if(context2.number > 1250) {
            context2.setText('Passou !!')
        }
    }, [context2.number])
    

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{context.state.number}</span>
                <span className="text">{context.state.text}</span>

                <div>
                    <button className='btn' onClick={() => setNumber(1)}>+1</button>
                    <button className='btn' onClick={() => setNumber(-1)}>-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className='center'>
                <span className='text'>{context2.number}</span>
                <span className='text'>{context2.text}</span>
                <div>
                    <button className='btn' onClick={() => context2.setNumber(context2.number - 1)}>-1</button>
                    <button className='btn' onClick={() => context2.setNumber(context2.number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
