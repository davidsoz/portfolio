import * as Styled from "./styled";
import clipart from "../src/assets/clipart.png";
import avatar from "../src/assets/avatar.png";

import Header from "./componenets/header/Header";
import styled from 'styled-components';
import { ContactModal } from "./componenets/contactModal/ContactModal";
import { useState } from "react";
import { Projects } from "./componenets/projects/Projects";

function App() {

	const [showModal, setShowModal] = useState(false);
	const [projects, setProjects] = useState(false);

	const showModalHandler = () => {
		setShowModal(true)
	}

	const closeModalHandler = () => {
		setShowModal(false)

	}
	const showProjectsHandler = () => {
		setProjects(true)
	}

	const closeProjectsHandler = () => {
		setProjects(false)
	}

	return (
		<Styled.ContainerFluid>
			<Styled.Wrapper scroll={showModal}>
				<Header onShowProjects={showProjectsHandler} onCloseProjects={closeProjectsHandler} />
				<Styled.main>
					{showModal && <ContactModal show={showModalHandler} close={closeModalHandler} />}
					{projects ?
						<Projects />
						:
						<div>
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
						</div>}
				</Styled.main>
			</Styled.Wrapper>
		</Styled.ContainerFluid>
	);
}

export default App;

const Aboutme = styled.div`
	color: #F5D5AE;
	display: flex;
	flex-direction: column;
	align-items: center;
	user-select: none;
	/* padding: 100px; */
	p:first-child {
		max-width: 1000px;
		text-align: center;
		font-size: 52px;
		/* font-weight: bold; */
		padding: 10px;
		/* text-shadow: 3px 3px 3px rgba(255,255,255,0.3); */
	}
	p:last-child {
		max-width: 1000px;
		text-align: center;
		font-size: 32px;
		>span {
			/* font-weight: bold; */
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
