import React, { useEffect } from "react";
import "./GMap.css"
const GMap = ({ cordinates }) => {

    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = cordinates[0];
        const lon = cordinates[1];
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    }, [cordinates])
    return (

        <div className="gmap" >
            <iframe id="iframeId" ></iframe>
        </div >

    );
}

export default GMap