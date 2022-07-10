import { useParams } from "react-router-dom";

function Param(){
    const { id } = useParams();

    return(
        <div>
            <h1>Componente com parametro</h1>
            <p>Valor: {id}</p>
        </div>
    )
}

export default Param;