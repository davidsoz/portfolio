import styled from 'styled-components';

export function SingleProject({name, logoUrl, url}) {
    return (
        <Container>
            <div>
                <img src={logoUrl} />    
            </div>
            <div>{name}</div>
            <div>
                <a href={url} target="_blank">{url}</a>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10%;
    padding: 40px 40px;
    text-align: center;
    font-size: 22px;
    background-color: #65C9FF;
    div {
        font-weight: bold;
    }
    img {
        height: 100px;
    }
`;