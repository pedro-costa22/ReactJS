import IndiretaFilho from "./IndiretaFilho";
import {useState} from 'react';

function IndiretaPai(){

    const [nomePai, setNomePai] = useState("?");
    const [idadePai, setIdadePai] = useState(null);
    const [nerd, setNerd] = useState(false);

    function fornecerInformacoes(nome, idade, nerd){
        console.log(nome, idade, nerd);
        setNomePai(nome);
        setIdadePai(idade);
        setNerd(nerd);
    }

    return(
        <div>
            <span>{nomePai} </span>
            <span><strong> {idadePai} </strong></span>
            <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
            
        </div>
    )
}

export default IndiretaPai;