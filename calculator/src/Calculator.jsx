import { useState } from 'react';
import './Calculator.css';
import Display from './components/Display';
import Button from './components/Button';


function Calculator(){

    const [insert, setInsert] = useState("");
    const [previous, setPrevious] = useState("");
    const [operator, setOperator] = useState("");


    const inserNumber = (num) =>  {
        let insertAdd = `${insert}${num}`;
        setInsert(insertAdd);
    }

    const clearDisplay = () => {
        setInsert("");
        setPrevious("");
        setOperator("");
    }


    const calculator = (op) => {
        
        setPrevious(insert);
        setInsert('');
        setOperator(op)

        let previousNumber = Number(previous);
        let insertNumber = Number(insert);

        let result = null;

    
        switch(operator){
            case "+":
                result = previousNumber + insertNumber;
                setPrevious(result);
                break;

            case "-":
                result = previousNumber - insertNumber;
                setPrevious(result);
                break;

            case "*":
                result = previousNumber * insertNumber
                console.log(result, previousNumber, insertNumber);
                setPrevious(result);
                break;

            case "/":
                result = previousNumber / insertNumber;
                console.log(result, previous, insert);
                setPrevious(result);
                break;

    
            default:
                result = 20;
            break; 
 
        } 
    }

    const equal = () => {

        let previousNumber = Number(previous);
        let insertNumber = Number(insert);

        let result = null; 
        switch(operator){
            case "+":
                result = previousNumber + insertNumber;
            break;

            case "-":
                result = previousNumber - insertNumber;
            break;

            case "*":
                result = previousNumber * insertNumber;
            break;

            case "/":
                result = previousNumber / insertNumber;
            break;

            default:
                result = null;
            break;
        }

        setInsert(result);
        setPrevious('');
        setOperator(''); 
    }





    return (
        <div className='cont_calculator'>
            <Display previous={previous} insert={insert} operator={operator}/>
           
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
                <Button value="=" classButton='buttonNumbers operator equal' setValue={equal}/>
            </div>

        </div>
    )
};

export default Calculator;