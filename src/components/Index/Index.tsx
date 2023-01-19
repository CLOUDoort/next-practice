import React, { useEffect, useState } from 'react'
import { IndexBox } from './Index.style'
import IndexSlider from './IndexSlider'
import IndexPopularList from './IndexPopularList'
import FeedRanking from '../Community/Feed/FeedRanking'
import IndexUpComingList from './IndexUpComingList'
import LoadingLogo from '../Common/Loading/LoadingLogo'
import useGetPopularMovie from '../../apis/MovieData/PopularMovie'
import useGetThemeMovie from '../../apis/MovieData/ThemeMovie'
import useGetHitFeed from '../../apis/CommunityData/HitFeedData'
import useGetUpComing from '../../apis/MovieData/UpComing'

const Index = () => {
    const popularMovie = useGetPopularMovie().data
    const themeMovie = useGetThemeMovie().data
    const isLoading = useGetThemeMovie().isLoading
    const hitFeed = useGetHitFeed().data
    const [sliderImage, setSliderImage] = useState([])
    const upComing = useGetUpComing(1).data

    let rankingNum = 1;
    const hitDataList = hitFeed?.data?.top5Contents.map((obj) => ({
        ...obj, rankingNum: rankingNum++
    }))
    useEffect(() => {
        const getResponse = () => {
            if (!isLoading) {
                const sliderImageBox = Object.entries(themeMovie?.data).map(([key, value]) => ({
                    movie_id: value[2].movie_id,
                    movie_name: value[2].movie_name,
                    backdrop_path: value[2].backdrop_path,
                    theme_name: value[2].theme_name
                }))
                setSliderImage(sliderImageBox)
            }
        }
        getResponse()
    }, [isLoading])

    return (
        <>
            {!isLoading ? <IndexBox>
                <IndexSlider sliderImage={sliderImage} />
                <IndexPopularList popularMovie={popularMovie?.data} />
                <IndexUpComingList upComingList={upComing?.data?.resultArray} />
                <FeedRanking hit={hitDataList} />
            </IndexBox> : <LoadingLogo />}
        </>
    )
}

export default Index
