function PassoForm({passo, setPasso}){
    return(
        <div>
            <div>
                <label htmlFor='passoInput'>Passo:</label>
                <input id='passoInput' type="number" value={passo} onChange={(e) => setPasso(e.target.value)}/>
            </div>
        </div>
    )
};

export default PassoForm;