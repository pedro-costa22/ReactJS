import React from 'react';
import './App.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

function App(){
    return(
        <div>

        <div className='cards'>
            <h1>Fundamentos React</h1>

            <Card titulo="#12 - Desafio Megasena">
                <Mega />
            </Card>

            <Card titulo="#11 - Contador (class)">
                <Contador numInicial={10}/>
            </Card>

            <Card titulo="#10 - Componente controlado (input)">
                <Input />
            </Card>

            <Card titulo="#09 - Comunicação Indireta">
                <IndiretaPai />
            </Card>

            <Card titulo="#08 - Comunicação direta">
                <DiretaPai />
            </Card>

            <Card titulo="#07 - Renderização condicional">
                <ParOuImpar num={20}/>
            </Card>


            <Card titulo="#06 - Desafio tabela produtos">
                <TabelaProdutos />
            </Card>


            <Card titulo="#05 - Repetição">
                <ListaAlunos />
            </Card>

            <Card titulo="#04 - Componente com filhos">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Maria" />
                    <FamiliaMembro nome="Helida" sobrenome="Costa"/> 
                </Familia>
            </Card>
            
            <Card titulo="#03 -Primeiro Componente">
                <Primeiro />
            </Card>

            <Card titulo="#02 - Componente com parametro">
                <ComParametro 
                titulo="Situação aluno" 
                aluno="Pedro" 
                nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Desafio Aleatório" color="#282">
                <Aleatorio min={1} max={10} />
            </Card>

            
        </div>
        

        
       

        
        </div>
    )
}

export default App;