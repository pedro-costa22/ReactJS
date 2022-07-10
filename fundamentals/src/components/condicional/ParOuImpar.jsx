import If from "./If";

function ParOuImpar({num}){

    //const isPar = num % 2 === 0; // Usando ternario padrão do javascript
    return(
        <div>
            {/*isPar ? <span>Par</span> : <span>Impar</span> Usando o ternario padrão do JS*/}
            {num % 2 === 0 && (
                <p>O numero {num} é Par</p>
            )}

            {num % 2 != 0 && (
                <p>O numero {num} é Impar</p>
            )}
           
        </div>
    )
};

export default ParOuImpar;