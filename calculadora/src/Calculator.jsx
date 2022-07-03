import { useState } from 'react';
import './Calculator.css';
import Display from './components/Display';
import Button from './components/Button';


function Calculator(){

    const [state, setState] = useState({
        insert: '',
        previous: '',
        operator: '',
        result: ''
    })

    const inserNumber = (num) =>  {
        let insertAdd = state.insert + num;
        setState(old => ({...old, insert: insertAdd}))
    }

    const clearDisplay = () => {
        setState(old => ({...old, insert: '', previous: '', operator: '', result: ''}))
    }


    const calculator = (operator2) => {

        setState(old => ({...old, previous: state.insert, insert: '', operator: operator2}))

        let result = null;
        switch(operator2){
            case "+":
                result = Number(state.previous) + Number(state.insert)
                setState(old => ({...old, insert: result}))
                break;;

            case "-":
                result = Number(state.previous) - Number(state.insert)
                setState(old => ({...old, insert: result}))
                break;

            case "*":
                result = Number(state.previous) * Number(state.insert)
                setState(old => ({...old, insert: result}))
                break;
                
            case "/":
                result = Number(state.previous) / Number(state.insert)
                setState(old => ({...old, insert: result}))
                break;

    
            default:
                result = 20;
            break;
 
        } 
    }

    const equal = (operator) => {

        let previousNumber = Number(state.previous);
        let insertNumber = Number(state.insert);

        let result = null; 
        switch(operator){
            case "+":
                result = previousNumber + insertNumber;
            break;

            case "-":
                result = previousNumber - inserNumber;
            break;

            case "*":
                result = previousNumber * inserNumber;
            break;

            case "/":
                result = previousNumber / inserNumber;
            break;

            default:
                result = null;
            break;
        }

        setState(old => ({...old, previous: 0, insert: result, operator: ''}))
    }





    return (
        <div className='cont_calculator'>
            <Display previous={state.previous} insert={state.insert} operator={state.operator}/>

            <div className='row'>
                <Button value="AC" classButton="clear"  setValue={clearDisplay}/>
                <Button value="/" classButton='buttonNumbers operator' setValue={calculator}/>
            </div>

            <div className='row'>
                <Button value={7} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value={8} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value={9} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value="*" classButton='buttonNumbers operator' setValue={calculator}/>
            </div>

            <div className='row'>
                <Button value={4} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value={5} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value={6} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value="-" classButton='buttonNumbers operator' setValue={calculator}/>
            </div>

            <div className='row'>
                <Button value={1} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value={2} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value={3} classButton='buttonNumbers' setValue={inserNumber}/>
                <Button value="+" classButton='buttonNumbers operator' setValue={calculator}/>
            </div>

            <div className='row'>
                <Button value={0} classButton='buttonNumbers zero' setValue={inserNumber}/>
                <Button value="." classButton='buttonNumbers'setValue={inserNumber}/>
                <Button value="=" classButton='buttonNumbers operator equal' setValue={() => equal(state.operator)}/>
            </div>

        </div>
    )
};

export default Calculator;