function Button({handleValores, qtd}) {

   

    return(
        <div>
            <button onClick={() => {handleValores(qtd)}}>Gerar mega sena</button>
        </div>
    )
}

export default Button;