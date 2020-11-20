import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlusCircle, faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faPlusCircle, faCircle)

type Props = {
    active?: boolean
}

const SButton = styled.div`
    cursor: pointer;
    font-size: 25px;
`
  
const StarButton: React.FunctionComponent<Props> = ({active}) => {
    return (
        <SButton className="fa-layers fa-fw">
            <FontAwesomeIcon icon="circle" color="#8EB5FC" mask="star" transform="shrink-6 down-5 right-6"/>
            <FontAwesomeIcon icon="plus-circle" color="#8EB5FC" transform="shrink-8 down-5 right-6" />
        </SButton>
    )
}

export default StarButton 