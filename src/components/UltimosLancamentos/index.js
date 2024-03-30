import {livros} from "./dadosUltimosLancamentos.js"
import styled from 'styled-components'
import {Titulo} from '../../components/Titulo/index.js';
import CardRecomenda from "../CardRecomenda/index.js";
import imagemLivro from "../../images/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){

    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#000" 
                tamanhoFonte="36px"
            >ÚLTIMOS LANÇAMENTOS
            </Titulo>
            
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>

            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
                titulo={"Talvez você se interesse por"}
                subtitulo={"Angular 11"}
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
        

    )
}
export default UltimosLancamentos;