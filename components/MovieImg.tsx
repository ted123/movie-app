import { IMG_POSTER_URL } from "../config"
import { useState } from "react"
import React from "react"
import styled from "styled-components"
import Skeleton from "react-loading-skeleton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faVideo } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo);

type Props = {
	src: String
}

const done = {
	display: "block"
}

const loading = {
	display: "none"
}

const TmpImg = styled(Skeleton)`
	height: 750px;
	max-height: 275px;
	border-radius: 0;
`

const ErrImg = styled.div`
	background-color: #C4DCFD;
	height: 100%;
	justify-content: center;
	display: flex;
	align-items: center;
`

const MovieImg:React.FunctionComponent<Props> = ({src}) => {
	const [loaded, setLoaded] = useState<Boolean>(false);
	const [hasErr, setHasErr] = useState<Boolean>(false);

	const doneCB = () => {
		setLoaded(true);
	}

	const errorCB = () => {
		setLoaded(true);
		setHasErr(true);
	}

	return (
		<React.Fragment>
			{hasErr ? <ErrImg><FontAwesomeIcon style={{ color: "#DFEBFC" }} icon="video" color="white" size="4x"/></ErrImg> : <div>
				<img style={loaded ? done: loading} src={src ? `${IMG_POSTER_URL}${src}` : null} onLoad={doneCB} onError={errorCB} />
			</div>}
			
			{loaded ? null : <TmpImg/> }
		</React.Fragment>
	)
}

export default MovieImg
