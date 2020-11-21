import { Button } from "react-bootstrap"
import styled from "styled-components"

const CardImage = styled.img`
    width: 100%;
`

const CardBody = styled.div`
    padding:10px
`
const Title = styled.div`
    font-weight: bold;
    font-size: 12px;
    height: 35px;
`

const CardBtn = styled(Button)`
    font-weight: 550;
    font-size: 12px;
    width: 100%
`

const CardContainer = styled.div`
    background-color: white;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: calc(.25rem - 1px);
`

const MovieCard: React.FunctionComponent = () => (
	<CardContainer>
		<CardImage src="http://image.tmdb.org/t/p/w185/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg"></CardImage>
        <CardBody>
            <Title>Batman The Movie</Title>
            <CardBtn>Watch</CardBtn>
        </CardBody>
	</CardContainer>
)

export default MovieCard