import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { Movie } from '../interfaces';
import Skeleton from 'react-loading-skeleton'
import { IMG_POSTER_URL } from '../config'

const PosterImage = styled.img`
	height: 100%;
	object-fit: cover;
	width: 100%;
`

const PosterCol = styled(Col)`
	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
`

const PosterSkel = styled(Skeleton)`
	line-height: 1;
	height: 100%;
	min-height: 240px;
`

type Props = {
	data?: Movie
}

const DetailsSection: React.FunctionComponent<Props> = ({data}) => (
	<Row>
		<Col xs={{span:12, order:2}} sm={{span:12, order:2}} md={{span:9, order:1}}>
			<h5>
				{data.id ? "Synopsis" : <Skeleton width={80}></Skeleton>}
			</h5>
			<p>
				{data.id ? data.overview : <Skeleton count={13}></Skeleton>}
			</p>
		</Col>
		<PosterCol xs={{span:12, order:1}} sm={{span:12, order:1}} md={{span:3, order:2}}>
			{data.id ? <PosterImage src={`${IMG_POSTER_URL}${data.poster_path}`}></PosterImage> : <PosterSkel></PosterSkel>}
		</PosterCol>
	</Row>
)

export default DetailsSection