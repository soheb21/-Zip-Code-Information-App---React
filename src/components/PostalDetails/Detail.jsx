import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import { selectPostDetails } from '../../features/detail/detailSlice'
import GMap from '../Map/GMap'
import "./Detail.css"
import { sliderSetting } from '../../utils/common'


const Detail = () => {
    const data = useSelector(selectPostDetails);
    const cordinates = []
    data?.places?.forEach(element => {
        if (!cordinates.includes(element.latitude)) {
            cordinates.push(element.latitude, element.longitude)
        }
    });
    console.log("data", data)
    return (
        <>
            {
                data ? <section className='d-section'>
                    <div className="d-header">
                        <h2>Country:{data.country}</h2>
                        <h2>Postal Code:{data['post code']}</h2>
                    </div>
                    <div className="detail-container">

                        <GMap cordinates={cordinates} />
                        <div className='detail-info'>
                            <h1>Results:{data.places.length}</h1>

                            <Swiper {...sliderSetting}>
                                <SliderButton />

                                {
                                    data?.places?.map((item, i) => (
                                        <SwiperSlide key={i} >
                                            <div className="r-card">
                                                <span>{i + 1}</span>
                                                <h4>State: {`${item.state}`} <span>{item['state abbreviation']}</span></h4>
                                                <p>Place Name: {item['place name']}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                    </div>
                </section>
                    : undefined
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