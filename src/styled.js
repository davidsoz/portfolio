
import styled from 'styled-components';
import clipart from "./assets/wallhaven.png";

export const ContainerFluid = styled.div`
   
    background-color: #070707;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1650px;
    padding: 0 50px;
    min-height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    background-image: url(${clipart});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-family: 'kanit', sans-serif;
    
`

export const main = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
`