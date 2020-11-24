import { Button } from "react-bootstrap"
import styled from "styled-components"
import { Movie } from "../interfaces"
import MovieImg from "./MovieImg"
import Skeleton from "react-loading-skeleton"

const CardBody = styled.div`
	padding:10px;
	width: 100%;
	position: absolute;
	bottom: 0;
	height: 100px;
`
const Title = styled.div`
	font-weight: 500;
	font-size: 16px;
	min-height: 48px;
`

const CardBtn = styled(Button)`
	font-weight: 550;
	font-size: 12px;
	width: 100%
`

const CardContainer = styled.div`
	height: 100%;
	line-height: 1;
	background-color: white;
	border: 1px solid rgba(0,0,0,.125);
	border-radius: calc(.25rem - 1px);
	position: relative;
	img {
		width: 100%
	}
	padding-bottom: 100px;
`

const CardBtnDiv = styled.div`
	width: 100%;
`

type Props = {
	data: Movie
}

const MovieCard: React.FunctionComponent<Props> = ({data}) => {
	return (
		<CardContainer>
			<MovieImg src={data.poster_path} title={data.title}></MovieImg>
			<CardBody>
				<Title>{data.title ? data.title : <Skeleton height={25}></Skeleton>}</Title>
				<CardBtnDiv>
					{data.title ? <CardBtn>Watch</CardBtn> : <Skeleton height={25}></Skeleton>}
				</CardBtnDiv>
			</CardBody>
		</CardContainer>
	)
}

export default MovieCard