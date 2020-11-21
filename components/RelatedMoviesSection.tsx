import { Row, Col, Button } from "react-bootstrap"
import MovieCard from "./MovieCard"
import styled from "styled-components"

const RVCol = styled(Col)`
	padding: 0 7.5px 20px 7.5px;
	@media (min-width: 1000px) {
		flex: 1;
	}
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
	padding: 0 7px;
`

const RelatedMoviesSection: React.FunctionComponent = () => (
	<RMSContainer>
		<h5>Related Videos</h5>
		<RMSRow>
			<RVCol xs={6} md={4}>
				<MovieCard></MovieCard>
			</RVCol>
			<RVCol xs={6} md={4}>
				<MovieCard></MovieCard>
			</RVCol>
			<RVCol xs={6} md={4}>
				<MovieCard></MovieCard>
			</RVCol>
			<RVCol xs={6} md={4}>
				<MovieCard></MovieCard>
			</RVCol>
			<RVCol xs={6} md={4}>
				<MovieCard></MovieCard>
			</RVCol>
		</RMSRow>
		<Row>
			<CenterCol xs={12}>
				<VABtn>View all</VABtn>
			</CenterCol>
		</Row>
	</RMSContainer>
	
)

export default RelatedMoviesSection