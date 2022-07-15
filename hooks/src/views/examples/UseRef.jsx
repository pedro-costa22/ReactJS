import React, {useState, useRef, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

/* Em componentes funcionais existe duas maneiras de manter dados entre as renderizações: 
em uma variável de estado ou com um ref. Cada atualização nas variáveis de estado causa uma 
nova renderização do componente, certo? O mesmo não acontece se usarmos refs, pois mudar propriedade 
.current não causará uma nova renderização. Um exemplo de uso:  isso evita por exemplo, um loop infinito dentro de um useEffect, já
que não ira carregar novamente o compoenente sempre que o valor da variavel for alterado. 
("useRef é semelhante ao useState porém armazena o valor dentro de um objeto com current de propriedade, e para acessar precisamos
chamar a const .current (name.current)

a propriedade ref passa um elemento HTML como referencia(valor) para o current do objeto apontado
exemplo: const text = useRef(null);
<h1 ref={text}> Isso vai para o current </h1>
O h1 foi passado como referencia para o objetivo text, então 
text.current = <h1 ref={text}> Isso vai para o current </h1>
"
*/

const merge = (s1, s2) => {
    return [...s1].map((e, i) => {
        return `${e}${s2[i] || ""}`
    }).join("");
}

const UseRef = (props) => {

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    
    useEffect(() => {
        count.current++;
        myInput2.current.focus();
    }, [value1])

    useEffect(() => {
        count.current++;
        myInput1.current.focus();
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />


            <SectionTitle title="Exercício #01"/>
            <div className='center'>
                <div>
                    <span className='text'>Valor: </span>
                    <span className='text'>{merge(value1, value2)} [</span>
                    <span className='text red'>{count.current}</span>
                    <span className='text'>]</span>
                </div>
                <input type="text" className='input' ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)}/>

            </div>

            <SectionTitle title="Exercício #02" />
            <div className='center'>
                <input type="text" className='input' ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
