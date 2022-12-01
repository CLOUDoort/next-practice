import React, { useEffect, useState } from 'react'
import useGetPopularMovie from '../react-query/PopularMovie'
import useGetThemeMovie from '../react-query/ThemeMovie'
import { IndexBox } from './Index.style'
import IndexSlider from './IndexSlider'
import IndexPopularList from './IndexPopularList'
import useGetHitFeed from '../react-query/HitFeedData'
import FeedRanking from '../Community/Feed/FeedRanking'

const Index = () => {
    const popularMovie = useGetPopularMovie().data
    const themeMovie = useGetThemeMovie().data
    const isLoading = useGetThemeMovie().isLoading
    const [sliderImage, setSliderImage] = useState([])
    const hitFeed = useGetHitFeed().data
    useEffect(() => {
        const getResponse = () => {
            if (!isLoading) {
                const sliderImageBox = Object.entries(themeMovie?.data).map(([key, value]) => ({
                    movie_id: value[0].movie_id,
                    movie_name: value[0].movie_name,
                    backdrop_path: value[0].backdrop_path,
                    theme_name: value[0].theme_name
                }))
                setSliderImage(sliderImageBox)
            }
        }
        getResponse()
    }, [isLoading])

    return (
        <>
            {!isLoading && <IndexBox>
                <IndexSlider sliderImage={sliderImage} />
                <IndexPopularList popularMovie={popularMovie?.data} />
                <FeedRanking hit={hitFeed?.data?.top5Contents} />
            </IndexBox>}
        </>
    )
}

export default Index
