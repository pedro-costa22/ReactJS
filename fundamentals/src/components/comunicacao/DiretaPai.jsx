import DiretaFilho from "./DiretaFilho";

function DiretaPai(){
    return(
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true} />
            <DiretaFilho nome="Garbeil" idade={17} nerd={false} />
            
        </div>
    )
}

export default DiretaPai;