import { Container, Col, Button, FormControl, Row } from "react-bootstrap"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLessThan } from '@fortawesome/free-solid-svg-icons'

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

const SearchSection: React.FunctionComponent = () => (
    <SearchRow>
        <Col xs={3} sm={3} md={8}>
            <BackBtn>
                <FontAwesomeIcon icon="less-than"></FontAwesomeIcon> Back
            </BackBtn>
        </Col>
        <Col  xs={9} sm={9} md={4} lg={4}>
            <FormControl
                placeholder="Search for a movie"
                aria-label="Search for a movie"
            />
        </Col>
    </SearchRow>
)

export default SearchSection