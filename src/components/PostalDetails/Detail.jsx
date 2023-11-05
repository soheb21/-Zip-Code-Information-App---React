import React from 'react'
import {useSelector} from 'react-redux'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import { errorMssg, isLoading, selectPostDetails } from '../../features/detail/detailSlice'
import GMap from '../Map/GMap'
import "./Detail.css"
import { sliderSetting } from '../../utils/common'
import Spinner from '../../utils/Spinner/Spinner'


const Detail = () => {
    const data = useSelector(selectPostDetails);
    const isloading = useSelector(isLoading);
    const errorText = useSelector(errorMssg)

    if (errorText !== null) {
        alert(errorText)
    }

    const cordinates = []
    data?.places?.forEach(element => {
        if (!cordinates.includes(element.latitude)) {
            cordinates.push(element.latitude, element.longitude)
        }
    });
    return (
        <>
            {
                isloading ? <Spinner />
                    : data && <section className='d-section'>
                        <div className="d-header">
                            <h2><span className='d-text'>Country: </span><span className='d-text2'>{data.country}</span></h2>
                            <h2><span className='d-text'>Postal Code: </span><span className='d-text2'>{data['post code']}</span></h2>
                        </div>
                        <div className="detail-container">

                            <GMap cordinates={cordinates} />
                            <div className='detail-info'>
                                <h1><span className='d-text'>Results</span>: {data.places.length}</h1>

                                <Swiper {...sliderSetting}>
                                    <SliderButton />

                                    {
                                        data?.places?.map((item, i) => (
                                            <SwiperSlide key={i} >
                                                <div className="d-card">
                                                    <span className='d-index'>{i + 1}</span>
                                                    <h4><span className='d-text'>State</span>: {`${item.state}`} <span className='d-sb'>{item['state abbreviation']}</span></h4>
                                                    <p><span className='d-text'>Place Name</span>: {item['place name']}</p>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                            </div>
                        </div>
                    </section>

            }
        </>


    )
}

export default Detail
const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className="d-button">
            <button onClick={() => swiper.slidePrev()} className='button'>&lt;</button>
            <button onClick={() => swiper.slideNext()} className="button">&gt;</button>
        </div>
    )
}