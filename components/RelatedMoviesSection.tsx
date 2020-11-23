import { Row, Col, Button } from "react-bootstrap"
import MovieCard from "./MovieCard"
import styled from "styled-components"
import { Movie } from "../interfaces"
import Skeleton from "react-loading-skeleton"

const RVCol = styled(Col)`
	padding: 0;
	height: 100%;
	overflow: hidden;
`

const CenterCol = styled(Col)`
	text-align: center;
`

const VABtn =styled(Button)`
	font-weight: 550;
	font-size: 12px;
	width: 100px;
`

const RMSContainer = styled.div`
	margin-top: 20px;
`

const RMSRow = styled(Row)`
	padding: 0 15px 20px 15px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	align-items: center;
	grid-gap: 15px;
	grid-template-rows: repeat(1, 1fr);
	grid-auto-rows: 0;
	overflow-y: hidden;

	@media only screen and (max-width: 1109px) {
		grid-template-rows: repeat(2, 1fr);
	}

	@media only screen and (max-width: 464px) {
		grid-template-rows: repeat(5, 1fr);
	}
`

type Props = {
	data: Movie[]
}

const RelatedMoviesSection: React.FunctionComponent<Props> = ({data}) => {
	return (
		<RMSContainer>
			<h5>{data[0].original_title ? "Related Videos" : <Skeleton height={25} width={110}></Skeleton>}</h5>
			<RMSRow>
				{data.map((item, index) => (
					<RVCol key={index}>
						<MovieCard data={item}></MovieCard>
					</RVCol>
				))} 
			</RMSRow>
			<Row>
				<CenterCol xs={12}>
					{data[0].original_title ? <VABtn>View all</VABtn> : <Skeleton width={100} height={30}></Skeleton>}
				</CenterCol>
			</Row>
		</RMSContainer>
	)
}

export default RelatedMoviesSection