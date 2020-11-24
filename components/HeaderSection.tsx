import * as React from 'react'
import StarButton from './StarButton'
import styled from 'styled-components'

import {Container, Row, Col, Button } from 'react-bootstrap'
import { Movie } from '../interfaces'
import Skeleton from 'react-loading-skeleton'
import { IMG_BASE_URL } from '../config'

type Props = {
  data?: Movie
}

const HeaderButton = styled(Button)`
	font-weight: bold;
	font-size: 11px;
	margin-bottom: 5px;
`

const HBtnSkel = styled(Skeleton)`
	line-height: 1;
	margin-bottom: 5px;
`

const HBtnRow = styled(Row)`
	padding: 10px 0;

	div:last-child > button {  
		margin-bottom: 0;
	}
	
	@media only screen and (max-width: 766px) {
		div > button, ${HBtnSkel} {
			margin-bottom: 0;
		}

		div:first-child, ${HBtnSkel}:first-child {
			padding-right: 2.5px;
		}

		div:nth-child(2), ${HBtnSkel}:nth-child(2) {
			padding:0 2.5px;
		}

		div:last-child, ${HBtnSkel}:last-child {
			padding-left: 2.5px;
		}
	}
`

const HContainer = styled(Container)`
	line-height: 1;
	padding: 0;
`

const TitleGrp = styled(Col)`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	& > div:first-child {
		margin-right: 25px;
	}
	& > div:nth-child(2) {
		margin-right: 13px;
	}

	@media only screen and (max-width: 329px) {
		& > div:first-child {
			margin-right: 15px;
		}
		& > div:nth-child(2) {
			margin-right: 5px;
		}
	}
`

const HeaderTitle = styled.span`
  font-size:24px;
  font-weight: 600;
`

const RoundedImage = styled.img`
	border-radius: 50%;
	width: 90px;
	height: 90px;
	object-fit: cover;
` 

const HeaderSection: React.FunctionComponent<Props> = ({data}) => (
	<HContainer fluid>
		<Row>
			<TitleGrp xs={12} sm={12} md={9} lg={10}>
				<div>
					{ data.backdrop_path ? <RoundedImage src={`${IMG_BASE_URL}${data.backdrop_path}`} /> : <Skeleton circle height={85} width={90}></Skeleton> }
				</div>
				<div>
					<HeaderTitle>{ data.original_title ? data.original_title : <Skeleton height={24} width={120} /> }</HeaderTitle>
				</div>
				<StarButton key={data.id} movieId={data.id}/>
			</TitleGrp>
			<Col>
				<HBtnRow>
					<Col xs={4} sm={4} md={12} lg={12}>
						{ data.id ? <HeaderButton variant="outline-primary" block>Play Video</HeaderButton> : <HBtnSkel height={30}/>}	
					</Col>
					<Col xs={4} sm={4} md={12} lg={12}>
						{ data.id ? <HeaderButton variant="outline-primary" block>Watch Later</HeaderButton> : <HBtnSkel height={30}/>}
					</Col>
					<Col xs={4} sm={4} md={12} lg={12}>
						{ data.id ? <HeaderButton variant="outline-primary" block>Share</HeaderButton> : <HBtnSkel height={30}/>}
					</Col>
				</HBtnRow>
			</Col>
		</Row>
	</HContainer>
)

export default HeaderSection