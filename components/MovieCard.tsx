import { Button } from "react-bootstrap"
import styled from "styled-components"
import { Movie } from "../interfaces"
import MovieImg from "./MovieImg"
import Skeleton from "react-loading-skeleton"


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
    line-height: 1;
    background-color: white;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: calc(.25rem - 1px);

    img {
        width: 100%
    }
`
type Props = {
    data: Movie
}

const MovieCard: React.FunctionComponent<Props> = ({data}) => {
    return (
        <CardContainer>
            <MovieImg src={data.poster_path}></MovieImg>
            <CardBody>
                <Title>{data.title ? data.title : <Skeleton height={25}></Skeleton>}</Title>
                {data.title ? <CardBtn>Watch</CardBtn> : <Skeleton height={25}></Skeleton>}
            </CardBody>
        </CardContainer>
    )
}

export default MovieCard