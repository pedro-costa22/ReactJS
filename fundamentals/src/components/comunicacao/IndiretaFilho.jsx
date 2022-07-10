function IndiretaFilho({quandoClicar}){
    return(
        <div>
           <div>Filho</div>
           <button onClick={() => quandoClicar('Paulo', 45, true)}>Fornecer informações</button>
            
        </div>
    )
}

export default IndiretaFilho;