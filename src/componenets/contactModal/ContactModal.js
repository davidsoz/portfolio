
import styled from 'styled-components';

export function ContactModal({ show, close }) {
    return (
        <>
            <BackDrop onClick={close}>
                hello
            </BackDrop>
            <Modal>
                <div>
                    <div>Phone</div>
                    <span>+995 598 314 917</span>
                </div>
                <div>
                    <div>E-mail</div>
                    <span>davidsozashvili@gmail.com</span>
                </div>
                <div>
                    <div>LinkedIn</div>
                    <a href='https://www.linkedin.com/in/david-sozashvili/' target="_blank">https://www.linkedin.com/in/david-sozashvili/</a>
                </div>
                <div>
                    <div>GitHub</div>
                    <a href='https://github.com/davidsoz' target="_blank">https://github.com/davidsoz</a>
                </div>
            </Modal>
        </>
    )
}

const BackDrop = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: grey;
    opacity: 0.5;
    cursor: pointer;
`

const Modal = styled.div`
    position: absolute;
    width: fit-content;
    left: 0;
    right: 0;
    top: 28%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    padding: 25px;
    border-radius: 10px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    font-family: 'kanit', sans-serif;

    div {
        text-align: center;
        color: #606887;
    }
    a, span {
        display: inline-block;
        margin-top: 20px;
        padding: 5px 15px;
        border-radius: 7px;
        color: #5A1F8C;
    }
`