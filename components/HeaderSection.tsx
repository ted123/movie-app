import * as React from 'react'
import RoundedImage from './RoundedImage'
import HeaderTitle from './HeaderTitle'
import CenterCol from './CenterCol';
import StarButton from './StarButton';
import styled from 'styled-components';

import {Container, Row, Col, Button } from 'react-bootstrap'

type Props = {
  title?: string
}

const HeaderButton = styled(Button)`
	font-weight: 600;
	font-size: 12px;
	margin-bottom: 5px;
`

const ButtonCol = styled(Col)`

`

const HBtnRow = styled(Row)`
	padding: 10px 0;

	${ButtonCol}:last-child > button {  
		margin-bottom: 0;
	}

	
	@media only screen and (max-width: 766px) {
		${ButtonCol}:first-child {
			padding-right: 2.5px;
		}
		${ButtonCol}:nth-child(2) {
			padding:0 2.5px;
		}
		${ButtonCol}:last-child {
			padding: 0 2.5px;
		}
	}
`

const HContainer = styled(Container)`
	padding: 0;
`

const TitleGrp = styled(Col)`
	display: flex;
	align-items: center;
	& > div:first-child {
		margin-right: 25px;
	}
	& > div:nth-child(2) {
		margin-right: 13px;
	}
`

const HeaderSection: React.FunctionComponent<Props> = () => (
	<HContainer fluid>
		<Row>
			<TitleGrp xs={12} sm={12} md={9} lg={10}>
				<div>
					<RoundedImage src="http://image.tmdb.org/t/p/w185/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg" />
				</div>
				<div>
					<HeaderTitle>Mehehehe</HeaderTitle>
				</div>
				<StarButton/>
			</TitleGrp>
			<Col>
				<HBtnRow>
					<ButtonCol xs={4} sm={4} md={12} lg={12}>
						<HeaderButton variant="outline-primary" block>Play Video</HeaderButton>
					</ButtonCol>
					<ButtonCol xs={4} sm={4} md={12} lg={12}>
						<HeaderButton variant="outline-primary" block>Watch Later</HeaderButton>
					</ButtonCol>
					<ButtonCol xs={4} sm={4} md={12} lg={12}>
						<HeaderButton variant="outline-primary" block>Share</HeaderButton>
					</ButtonCol>
				</HBtnRow>
			</Col>
		</Row>
	</HContainer>
)

export default HeaderSection