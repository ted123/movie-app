import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePageLayout from '../components/HomePageLayout'
import DetailsSection from '../components/DetailsSection'
import HeaderSection from '../components/HeaderSection'
import RelatedMoviesSection from '../components/RelatedMoviesSection'
import styled from 'styled-components'
import SearchSection from '../components/SearchSection'

const PageDivider = styled.hr`
	border-width: 2px;
	border-color: rgb(216, 228, 252);
	margin-bottom: 0px;
`

export default function Home() {
	return (
		<HomePageLayout>
			<HeaderSection></HeaderSection>
			<PageDivider/>
			<SearchSection></SearchSection>
			<DetailsSection></DetailsSection>
			<RelatedMoviesSection></RelatedMoviesSection>
		</HomePageLayout>
	)
}
