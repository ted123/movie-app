import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlusCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

library.add(faStar, faPlusCircle, faCircle)

type Props = {
    movieId: number
}

const SButton = styled.button`
    cursor: pointer;
    font-size: 24px;
    background: transparent;
    border: 0;

    &:focus {
        background: transparent;
        border: 0;
        outline: 0;
    }
`

const StarButton: React.FunctionComponent<Props> = ({movieId}) => {
    const [like, setLike] = useState<Boolean>(false);

    useEffect(() => {
        setLike(Boolean(localStorage.getItem("like")));
    }, [])

    const handleClick = () => {
        setLike(!like);
        like ? localStorage.removeItem("like") : localStorage.setItem("like", "true");
    }

    const inactive = () => (
        <SButton className="fa-layers fa-fw" onClick={handleClick}>
            <FontAwesomeIcon icon="circle" color="#8EB5FC" mask="star" transform="shrink-6 down-5 right-6"/>
            <FontAwesomeIcon icon="plus-circle" color="#8EB5FC" transform="shrink-8 down-5 right-6" />
        </SButton>
    );
    
    const active = () => (
        <SButton className="fa-layers fa-fw" onClick={handleClick}>
            <FontAwesomeIcon icon="star" color="yellow"/>
        </SButton>
    );

    return movieId ? like ? active() : inactive() : <Skeleton width={24} height={24}/>
}

export default StarButton 