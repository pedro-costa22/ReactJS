import React, {useEffect, useState} from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(n){
    if(n < 0 ) return -1;
    if(n === 0) return 1;

    return calcFatorial(n - 1) * n;
}

/* O useEffect() recebe como primeiro parâmetro uma função que será executada assim que o componente renderizar. Então é um ótimo lugar para fazer requisições.
Dessa maneira como escrevemos, a função passada ao useEffect() será executada sempre que o componente for atualizado.

A beleza deste Hook é que podemos definir facilmente quando queremos que esta função seja executada novamente. Basta passar como segundo parâmetro ao useEffect() um Array com as variáveis que controlarão esse Hook.
Vamos supor que queremos que a função seja executada apenas quando a variável produto for alterada. Ficaria assim:
useEffect(() => {
		Produtos.buscar(produto);
	}, [produto])

E se quisermos que a função seja executada apenas uma vez, que é quando o componente é inserido na tela, basta passar um Array vazio.
useEffect(() => {
		Produtos.buscar(produto);
	}, [])
Você pode executar quantos useEffects() quiser, o que nos dá mais controle sobre o que e quando algo deve ser executado. */

const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState("ímpar");


    useEffect(() => {
        setFatorial(calcFatorial(number));

    }, [number]);

    useEffect(() => {
        setStatus(number % 2 === 0 ? "Par" : "ímpar")

    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />


           <SectionTitle title="Exercício #01"/>
           <div className='center'>
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial === -1 ? 'Não Existe' :  fatorial}</span>
                </div>
                <input className='input' type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className='center'>
                <div>
                    <span className='text'>Status: </span>
                    <span className='text red'>{status}</span>
                </div>
                
            </div>

        </div>
    )
}

export default UseEffect
