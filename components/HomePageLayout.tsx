import Head from 'next/head'
import styled from 'styled-components'

type Props = {
	title?: string
}

const HomeContainer = styled.div`
	max-width: 1140px;
	margin: auto;
	background: #f3f7fe;
	padding: 25px;
`

const HomePageLayout: React.FunctionComponent<Props> = ({
	children,
	title = 'Loading...',
}) => (
	<HomeContainer>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
		</Head>
			{children}
	</HomeContainer>
)

export default HomePageLayout