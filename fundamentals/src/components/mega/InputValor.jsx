function InputValor({setQtd}){
    return(
        <div>
            <input type="number" onChange={(e) => setQtd(e.target.value)} />
        </div>
    )
}

export default InputValor;