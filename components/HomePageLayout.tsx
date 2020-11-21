import * as React from 'react'
import Head from 'next/head'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
  }

  h5 {
    font-weight: bold;
  }
  .loading {
    @keyframes placeHolderShimmer{
      0%{
          background-position: -468px 0
      }
      100%{
          background-position: 468px 10
      }
    }
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #d8e4fc 10%, #eaf1fe 18%, #d8e4fc 33%);
    background-size: 800px 104px;
    position: relative;
  }
`;

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
  title = 'This is the default title',
}) => (
  <HomeContainer>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>
    <GlobalStyle/>
      {children}
  </HomeContainer>
)

export default HomePageLayout