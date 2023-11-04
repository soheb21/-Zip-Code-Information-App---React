import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostDetails } from '../../features/detail/detailSlice'
import "./Detail.css"

const Detail = () => {
    const data = useSelector(selectPostDetails);
    const state=[];
    for (let i = 0; i < data.places?.length; i++) {
        const element = data.places[i];
        if(!state.includes(element.state)){
            state.push(element.state);
        }
       console.log(element.placename)
    }
    return (
        <div className='detail-container'>
            <span>Country:{data.country}</span>
            <div className="detail-info">
               <p>state:{state[0]}</p>
               <p>Place Name:</p>
            </div>
        </div>
    )
}

export default Detail