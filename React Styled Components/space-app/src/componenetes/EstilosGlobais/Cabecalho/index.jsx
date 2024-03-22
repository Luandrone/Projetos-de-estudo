import styled from "styled-components"
import InputProcurar from "../../../Campotexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (<HeaderEstilizado>
        <img src="/imagens/logo.png" alt="imagem do logo" />
        <InputProcurar />
    </HeaderEstilizado>)
}

export default Cabecalho