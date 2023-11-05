import React from 'react'
import { SpinnerDotted } from 'spinners-react';
const Spinner = () => {
    return (
        <div className="spinner">
            <SpinnerDotted size={100} style={{ color: "orange" }} />
        </div>
    )
}

export default Spinner;