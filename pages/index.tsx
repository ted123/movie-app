import HomePageLayout from '../components/HomePageLayout'
import DetailsSection from '../components/DetailsSection'
import HeaderSection from '../components/HeaderSection'
import RelatedMoviesSection from '../components/RelatedMoviesSection'
import styled from 'styled-components'
import SearchSection from '../components/SearchSection'
import { NextPage, GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import { Movie } from '../interfaces'
import { SkeletonTheme } from 'react-loading-skeleton'
import { TMDB_APP_KEY } from "../config"
import { randomInteger } from '../utils'

const PageDivider = styled.hr`
	border-width: 2px;
	border-color: rgb(216, 228, 252);
	margin-bottom: 0px;
`
type Props = {
	movie:Movie,
	related:Array<Movie>
}

const Home:NextPage<Props> = ({movie, related}) => {
	const [mov, setMov] = useState<Movie>({});
	const [relatedMov, setRelatedMov] = useState<Movie[]>([{}, {}, {}, {}, {}, {}, {}, {}]); // 8 empty objects necessary to create skeleton cards

	useEffect(() => {
		// for demo purpose; delay display of data to show loading state 
		setTimeout(() => {
			setMov({...movie});
			setRelatedMov(related);
		}, 3000);
	}, [])

	return (
		<HomePageLayout title={movie.original_title}>
			<SkeletonTheme color="rgb(216, 228, 252)">
				<HeaderSection data={mov}></HeaderSection>
				<PageDivider/>
				<SearchSection data={mov}></SearchSection>
				<DetailsSection data={mov}></DetailsSection>
				<RelatedMoviesSection data={relatedMov}></RelatedMoviesSection>
			</SkeletonTheme>
		</HomePageLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const movieRes = await fetch(`https://api.themoviedb.org/3/movie/399579?api_key=${TMDB_APP_KEY}&language=en-US`);
	const relatedRes = await fetch(`https://api.themoviedb.org/3/movie/399579/similar?api_key=${TMDB_APP_KEY}&language=en-US&page=1`);
	const movie = await movieRes.json();
	const relatedMovies = await relatedRes.json();
	const related:Movie[] = relatedMovies.results.splice(0,8);
	// randomize error image for demo purposes
	related[randomInteger(0, 3)].poster_path = "error_path";
	return {
	  props: { movie, related },
	}
}

export default Home

