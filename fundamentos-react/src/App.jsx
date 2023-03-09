import './App.css'
import React from 'react'

import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'


export default props => {
    return (
        <div className='App'>
            <h1>Fundamentos React (Arrow)</h1>

            <div className='Cards'>
            <Card titulo='#11 - Componente Controlado (Input)' color='#E45F56'>
                    <Input></Input>
                </Card>

            <Card titulo='#10 - Comunicacao Indireta' color='#8BAD39'>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo='#09 - Comunicacao Direta' color='#59323C'>
                    <DiretaPai></DiretaPai>
                </Card>


                <Card titulo='#8 - Par Ou Impar' color='#982395'>
                    <ParOuImpar numero={21}>
                    </ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                    <UsuarioInfo usuario={{ email: 'fer@nando.com' }} />
                    <UsuarioInfo />
                </Card>

                <Card titulo='#7- Desafio Repeticao' color='28ABE3'>
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo='#6- Repeticao' color='#FF4C65'>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#5 - Componentes com Filhos" color='#00C8F8'>
                    <Familia sobrenome='Silva'>

                        <FamiliaMembro nome='Pedro ' />
                        <FamiliaMembro nome='Maria ' {...props} />
                        <FamiliaMembro nome='Joao ' sobrenome='Silva' />

                    </Familia>
                </Card>

                <Card titulo="#4 - Desafio Aleatorio" color='#FA6900'>
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#3 - Fragmento" color='#E94C6F'>
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Comparametro" color='#E8B71A'>
                    <ComParametro
                        aluno="Pedro Silva"
                        nota={9.3}
                    />
                </Card>

                <Card titulo="#1 - Primeiro Componente" color='#588C77'>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}