import * as Styled from "./styled";
import clipart from "../src/assets/clipart.png";

import Header from "./componenets/header/Header";
import styled  from 'styled-components';

function App() {
	return (
		<Styled.Wrapper>
			<Header />
			<Aboutme>
				<p>
					Hey, my name is Daviti Sozashvili and you can call me David
				</p>
				{/* <p>
					I’m a front-end web developer from Georgia. I’m always curious to 
					learn more when it comes to new technologies and creative coding.
				</p> */}
					<p>
						feel free to <span>contact</span> me...
					</p>
			</Aboutme>
			<Clipart>
				<img src={clipart} />
			</Clipart>
		</Styled.Wrapper>
	);
}

export default App;

const Aboutme = styled.div`
	color: #606887;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px;
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
