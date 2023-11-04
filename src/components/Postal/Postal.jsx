import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchPostalDetailsAsync, reset } from '../../features/detail/detailSlice';
import "./Postal.css"

const Postal = () => {
    const dispatch = useDispatch();
    const [postalCode, setPostalCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postalCode) {
            dispatch(fetchPostalDetailsAsync(postalCode))
            setPostalCode("")
        }
        else{
            alert("please enter the pincode")
        }
    }
    const handleReset = (e) => {
        e.preventDefault();
        dispatch(reset());
        setPostalCode("")
    }
    return (
        <div className='input-Container paddings'>
            <h1>Enter Postal Code </h1>
            <div className=" ">
                <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder='Enter You Postal Code' />
                <button className='button' onClick={(e) => handleSubmit(e)}>Submit</button>
                <button className='button' onClick={(e) => handleReset(e)} >Reset</button>
            </div>
        </div>
    )
}

export default Postal