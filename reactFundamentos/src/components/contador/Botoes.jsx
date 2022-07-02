function Botoes({inc, dec}){
    return(
        <div>
             <button onClick={inc}>+</button>
             <button onClick={dec}>-</button>
        </div>
    )
};

export default Botoes;