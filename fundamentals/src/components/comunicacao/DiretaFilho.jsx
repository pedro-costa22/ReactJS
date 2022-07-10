function DiretaFilho({nome, idade, nerd}){
    return(
        <div>  
             <div>
                <span>{ nome } </span>
                <span>{ idade }Anos </span>
                <span>{ nerd ? 'Verdaideiro' : 'Falso'}!</span>
            </div>
            
        </div>
    )
}

export default DiretaFilho;