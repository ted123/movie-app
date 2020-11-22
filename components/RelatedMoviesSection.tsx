import { Row, Col, Button } from "react-bootstrap"
import MovieCard from "./MovieCard"
import styled from "styled-components"
import { Movie } from "../interfaces"
import Skeleton from "react-loading-skeleton"

const RVCol = styled(Col)`
	padding: 0 7.5px 20px 7.5px;
	@media (min-width: 992px) {
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

type Props = {
	data: Movie[]
}


const RelatedMoviesSection: React.FunctionComponent<Props> = ({data}) => {
	// method for showing/hiding extra content depending on screensize
	const determineClass = (index) => {
		let className = "";
		if (index > 4) {
			className = `${className} d-lg-none`
		}
	
		if (index > 5) {
			className = `${className} d-sm-none d-md-block`
		}
	
		return className;
	}

	return (
		<RMSContainer>
			<h5>{data[0].original_title ? "Related Videos" : <Skeleton height={25} width={110}></Skeleton>}</h5>
			<RMSRow>
				{data.map((item, index) => (
					<RVCol key={index} xs={6} sm={4} md={3} className={determineClass(index)}>
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