
import styled from 'styled-components';
import { SingleProject } from './SingleProject';
import cherrysLogo from "../../assets/cherysLogo.png";

export function Projects() {
    return (
        <Container>
            <SingleProject logoUrl={cherrysLogo} name="Cherry's fitness" url="https://www.cherrysfit.com/"/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
`;