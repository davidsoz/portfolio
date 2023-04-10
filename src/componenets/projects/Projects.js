
import styled from 'styled-components';
import { SingleProject } from './SingleProject';
import cherrysLogo from "../../assets/cherysLogo.png";
import gammaLogo from "../../assets/GC_Logo.png";

export function Projects() {
    return (
        <Container>
            <SingleProject logoUrl={cherrysLogo} name="Cherry's fitness" url="https://www.cherrysfit.com/"/>
            <SingleProject logoUrl={gammaLogo} name="Gamma Consulting" url="https://gamma.ge/en"/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
`;