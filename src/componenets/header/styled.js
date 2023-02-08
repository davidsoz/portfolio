import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;
`

export const Logo = styled.div`
    >img {
        height: 50px;
        cursor: pointer;
    }
`

export const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    >div {
        font-size: 24px;
        cursor: pointer;
        user-select: none;
        color: #606887;
    }
    button {
        font-size: 22px;
        padding: 10px 25px;
        border-radius: 7777px;
        color: #3458eb;
        background-color: #fff;
        border: 3px solid #3458eb;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
            color: #fff;
            background-color: #3458eb;
        }
    }
`

