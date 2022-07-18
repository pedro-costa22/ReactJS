import React, {useReducer, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

function reducer(currentState, action){
    switch(action.type){
        case 'numberAdd2':
            return {...currentState, number: currentState.number + 2};

        case 'login':
            return {...currentState, user: {name: action.payload, idade: '20'}};

        case 'mult':
            return {...currentState, number: currentState.number * 7};

        case 'div':
            return {...currentState, number: currentState.number / 25};

        case 'round':
            return {...currentState, number: parseInt(currentState.number)};

        case 'handleNum': 
            return {...currentState, number: currentState.number + action.payload};
        
        default:
            return currentState

        
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [n, setN] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className='center'>
                {state.user ? <span className='text'>{state.user.name}, {state.user.idade} Anos</span> : <span className='text'>Sem usuário</span>}
                
                <span className="text">{state.number}</span>
                <div>
                    <button className='btn' onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className='btn' onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className='btn' onClick={() => dispatch({type: 'mult'})}>*7</button>
                    <button className='btn' onClick={() => dispatch({type: 'div'})}>/25</button>
                    <button className='btn' onClick={() => dispatch({type: 'round'})}>Arredondar</button>
                    
                </div>

                <div>
                    <input type="number" className='input' value={n} onChange={(e) => setN(e.target.value)} />
                    <button className='btn' onClick={() => dispatch({type: 'handleNum', payload: parseInt(n)})}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
