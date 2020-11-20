import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePageLayout from '../components/HomePageLayout'
import DetailsSection from '../components/DetailsSection'
import HeaderSection from '../components/HeaderSection'
import RelatedMoviesSection from '../components/RelatedMoviesSection'

export default function Home() {
	return (
		<HomePageLayout>
			<HeaderSection></HeaderSection>
			<DetailsSection></DetailsSection>
			<RelatedMoviesSection></RelatedMoviesSection>
		</HomePageLayout>
	)
}
