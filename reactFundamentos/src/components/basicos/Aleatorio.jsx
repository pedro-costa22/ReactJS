function Aleatorio({min, max}){
    const randomNumber =  parseInt(Math.random() * (max - min + 1) + min);

    return (
        <h1>{randomNumber}</h1>
    )
}

export default Aleatorio;