import * as React from 'react'
import RoundedImage from './RoundedImage'
import HeaderTitle from './HeaderTitle'
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import CenterCol from './CenterCol';
import StarButton from './StarButton';

type Props = {
  title?: string
}

const HeaderSection: React.FunctionComponent<Props> = () => (
	<Grid>
		<Row>
			<Col xs={12} sm={9} md={9} lg={10}>
				<Row>
					<Col>
						<RoundedImage src="http://image.tmdb.org/t/p/w185/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg" />
					</Col>
					<CenterCol>
						<HeaderTitle>Mehehehe</HeaderTitle>
					</CenterCol>
					<CenterCol xs={1}>
						<StarButton/>
					</CenterCol>
				</Row>
			</Col>
			<Col>
				<Col>Hi</Col>
				<Col>Hello</Col>
				<Col>Bye</Col>
			</Col>
		</Row>
	</Grid>
)

export default HeaderSection