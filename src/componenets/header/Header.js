import * as Styled from "./styled";
// import logo from "../../assets/logo.PNG";
import logo from "../../assets/logo_d.png";

export default function Header({onShowProjects, onCloseProjects}) {
    return (
        <Styled.Wrapper>
            <Styled.Logo onClick={onCloseProjects}>
                <img src={logo} />
            </Styled.Logo>
            <Styled.Contact>
                <div onClick={onShowProjects}>Projects</div>
                <button onClick={onCloseProjects}>Say Hello</button>
            </Styled.Contact>
        </Styled.Wrapper>
    )
}