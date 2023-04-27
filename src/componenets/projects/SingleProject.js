import styled from 'styled-components';

export function SingleProject({name, logoUrl, url}) {
    return (
        <Container>
            <div>
                <img src={logoUrl} />    
            </div>
            <div>{name}</div>
            <div>
                <a href={url} target="_blank">Go To The Webpage</a>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 260px;
    gap: 20px;
    border-radius: 10%;
    padding: 40px 40px;
    text-align: center;
    font-size: 22px;
    background-color: #F5D5AE;
    font-family: 'kanit', sans-serif;
    box-shadow: 0px 1px 2px 0px rgba(245, 213, 174 ,0.7),
            1px 2px 2px 0px rgba(245, 213, 174 ,0.7),
            2px 4px 2px 0px rgba(245, 213, 174 ,0.7),
            2px 4px 4px 0px rgba(245, 213, 174 ,0.7);
    img {
        height: 100px;
    }
`;
