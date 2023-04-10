import * as Styled from "./styled";
// import logo from "../../assets/logo.PNG";
import logo from "../../assets/logo_d.png";

export default function Header() {
    return (
        <Styled.Wrapper>
            <Styled.Logo>
                <img src={logo} />
            </Styled.Logo>
            <Styled.Contact>
                <div>Projects</div>
                <button>Say Hello</button>
            </Styled.Contact>
        </Styled.Wrapper>
    )
}