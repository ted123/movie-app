import { IMG_POSTER_URL } from "../config"
import { useState } from "react"
import React from "react"
import styled from "styled-components"
import Skeleton from "react-loading-skeleton"

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
	max-height: 300px;
`

const MovieImg:React.FunctionComponent<Props> = ({src}) => {
	const [loaded, setLoaded] = useState<Boolean>(false);

	const doneCB = () => {
		setLoaded(true);
	}

	return (
		<React.Fragment>
			<img style={loaded ? done: loading} src={`${IMG_POSTER_URL}${src}`} onLoad={doneCB}></img>
			{loaded ? null : <TmpImg/> }
		</React.Fragment>
	)
}

export default MovieImg
