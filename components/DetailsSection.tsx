import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

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
const DetailsSection: React.FunctionComponent = () => (
	<Row>
		<Col xs={{span:12, order:2}} sm={{span:12, order:2}} md={{span:9, order:1}}>
			<h5>
				Synopsis
			</h5>
			<p>
				When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.
			</p>
		</Col>
		<PosterCol xs={{span:12, order:1}} sm={{span:12, order:1}} md={{span:3, order:2}}>
			<PosterImage src="http://image.tmdb.org/t/p/w185/xRWht48C2V8XNfzvPehyClOvDni.jpg"></PosterImage>
		</PosterCol>
	</Row>
)

export default DetailsSection