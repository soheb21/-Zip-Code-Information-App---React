import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchPostalDetailsAsync } from '../../features/detail/detailSlice';
import "./Postal.css"

const Postal = () => {
    const dispatch = useDispatch();
    const [postalCode, setPostalCode] = useState(null);

    const handleSubmit = () => {
        dispatch(fetchPostalDetailsAsync(postalCode))
    }
    return (
        <div className='input-Container paddings'>
            <h1>Enter Postal Code </h1>
            <div className=" ">
                <input type="text" onChange={(e) => setPostalCode(e.target.value)} placeholder='Enter You Postal Code' />
                <button className='button' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Postal