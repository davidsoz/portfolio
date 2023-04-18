
import styled from 'styled-components';
import cherrysLogo from "../../assets/cherysLogo.png";
import gammaLogo from "../../assets/GC_Logo.png";
import deliveryLogo from "../../assets/dish.png";
import responsiveDesign from "../../assets/clipart.png";
import newspaper from "../../assets/newspaper.png";
import { SingleProject } from './SingleProject';

export function Projects() {
    return (
        <Container>
            <SingleProject logoUrl={cherrysLogo} name="Cherry's Fitness" url="https://www.cherrysfit.com/"/>
            <SingleProject logoUrl={gammaLogo} name="Gamma Consulting" url="https://gamma.ge/"/>
            <SingleProject logoUrl={deliveryLogo} name="Pre-Delivery App" url="https://order-app-davidsoz.vercel.app/"/>
            <SingleProject logoUrl={responsiveDesign} name="Responsive Design" url="https://markup-davidsoz.vercel.app/"/>
            <SingleProject logoUrl={newspaper} name="Social News App" url="https://task1-self.vercel.app/"/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 90px;
    flex-wrap: wrap;
    gap: 50px;
`;