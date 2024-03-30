import Logo from "../Logo/index.js";
import OpcoesHeader from "../OpcoesHeader/index.js";
import IconesHeader from "../IconesHeader/index.js";
import styled from 'styled-components';

const HeaderComponent = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

function Header(){
    return(
        <HeaderComponent>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderComponent>
    )
};

export default Header;

