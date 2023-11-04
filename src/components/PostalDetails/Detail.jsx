import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostDetails } from '../../features/detail/detailSlice'
import GMap from '../Map/GMap'
import "./Detail.css"


const Detail = () => {
    const data = useSelector(selectPostDetails);
    console.log("data", data)
    const cordinates = []
    data?.places?.forEach(element => {
        if (!cordinates.includes(element.latitude)) {
            cordinates.push(element.latitude, element.longitude)
        }
    });
    if(cordinates[0]==="" && cordinates[1]===""){
        while(cordinates.length!==0){
            cordinates.pop();
        }
    }
    console.log("cor",cordinates)
    return (
        <>

            {
                data && <section className='d-section'>
                    <h2>Country:{data.country}</h2>
                    <div className="detail-container">
                        {
                            cordinates && <GMap cordinates={cordinates} />
                        }

                        <div className=' detail-info'>
                            {
                                data?.places?.map((item, i) => (
                                    <div className="r-card" key={i}>
                                        <h4>State: {`${item.state}`} <span>{item['state abbreviation']}</span></h4>
                                        <p>Place Name: {item['place name']}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
            }
        </>

    )
}

export default Detail