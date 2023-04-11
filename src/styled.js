
import styled from 'styled-components';
import clipart from "./assets/wallhaven.png"

export const Wrapper = styled.div`
    max-width: 1650px;
    padding: 0 50px;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    background-image: url(${clipart});
    background-repeat: no-repeat;
    /* background-position: center; */
    background-size: cover;
`