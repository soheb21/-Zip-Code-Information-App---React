import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { fetchPostalDetailsAsync, reset } from '../../features/detail/detailSlice';
import "./Postal.css"

const Postal = () => {
    const dispatch = useDispatch();
    const [postalCode, setPostalCode] = useState("");

    const handleSubmit = () => {
        if (!postalCode) {
            alert("please Enter the Postal Number")
        }
        else if (postalCode.length !== 6) {
            alert("Please Enter Valid Postal Number")
        }
        else {
            dispatch(fetchPostalDetailsAsync(postalCode))
            setPostalCode("")
        }
    }
    const handleReset = () => {
        dispatch(reset());
        setPostalCode("")
    }
    return (

        <div className='input-Container'>
            <h1>LEAD </h1>
            <div className=" ">
                <input type="number" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder='Enter the Postal Number..' />
                <div className="n-btn">
                    <button className='button' onClick={handleSubmit}>Submit</button>
                    <button className='button' onClick={handleReset} >Reset</button>
                </div>
            </div>

        </div>

    )
}

export default Postal
