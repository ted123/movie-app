import { Col, Button, FormControl, Row } from "react-bootstrap"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'
import { Movie } from "../interfaces"

library.add(faLessThan)

const BackBtn = styled(Button)`
    font-size: 13px;
    padding: 5px;
    line-height: 0.8;
    width: 64px;
    margin-top: 6px;
`

const SearchRow = styled(Row)`
    padding-top: 20px;
    padding-bottom: 20px; 
`

type Props = {
    data: Movie
}

const Btn = () => (
    <BackBtn>
        <FontAwesomeIcon icon="less-than"></FontAwesomeIcon> Back
    </BackBtn>
)

const Input = () => (
    <FormControl
        placeholder="Search for a movie"
        aria-label="Search for a movie"
    />
)

const SearchSection: React.FunctionComponent<Props> = ({data}) => (
    <SearchRow>
        <Col xs={3} sm={3} md={8}>
            {data.id ? Btn() : <Skeleton width={64} height={25}></Skeleton>}       
        </Col>
        <Col  xs={9} sm={9} md={4} lg={4}>
            {data.id ? Input() : <Skeleton height={34}></Skeleton>}
        </Col>
    </SearchRow>
)

export default SearchSection