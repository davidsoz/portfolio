import * as Styled from "./styled";
// import logo from "../../assets/logo.PNG";
import logo from "../../assets/logo_d.png";

export default function Header({
  onShowProjects,
  onCloseProjects,
  onShowModal,
  projects,
}) {
  return (
    <Styled.Wrapper>
      <Styled.Logo onClick={onCloseProjects}>
        <img src={logo} alt="Logo" />
      </Styled.Logo>
      <Styled.Contact>
        <div onClick={projects ? onCloseProjects : onShowProjects}>
          Projects
        </div>
        <button onClick={onShowModal}>Say Hello</button>
      </Styled.Contact>
    </Styled.Wrapper>
  );
}
