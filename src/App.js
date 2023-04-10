import * as Styled from "./styled";
import clipart from "../src/assets/clipart.png";
import avatar from "../src/assets/avatar.png";

import Header from "./componenets/header/Header";
import styled  from 'styled-components';
import { ContactModal } from "./componenets/contactModal/ContactModal";
import { useState } from "react";

function App() {

	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(true)
	}

	const closeModalHandler = () => {
		setShowModal(false)
	}

	return (
		<Styled.Wrapper scroll={showModal}>
			<Header />
			{showModal && <ContactModal show={showModalHandler} close={closeModalHandler}/>}		
			<Aboutme>
				<p>
					Hey, my name is Daviti Sozashvili and you can call me David
				</p>
				<p>
					feel free to <span onClick={showModalHandler}>contact</span> me...
				</p>
			</Aboutme>
			<Avatar>
				<img src={avatar} />
			</Avatar>
			{/* <Clipart>
				<img src={clipart} />
			</Clipart> */}
		</Styled.Wrapper>
	);
}

export default App;

const Aboutme = styled.div`
	color: #606887;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* padding: 100px; */
	p:first-child {
		max-width: 1000px;
		text-align: center; 
		font-size: 52px;
		font-weight: bold;
	}
	p:last-child {
		max-width: 1000px;
		text-align: center; 
		font-size: 32px;
		>span {
			font-weight: bold;
			color: #25AAE1;
			cursor: pointer;
		}
	}
	
`

const Clipart = styled.div`
	text-align: center;
`

const Avatar = styled.div`
	text-align: center;
	img {
		height: 350px;
	}
`
