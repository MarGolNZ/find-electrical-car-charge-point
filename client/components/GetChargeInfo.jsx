import React, { useState, useEffect } from 'react'
import { getChargeInfo } from '../apiClient.js'

export default function GetChargeInfo() {
    const [chargePoint, setChargePoint] = useState({ AddressInfo: { AddressLine1: '', StateOrProvince: '', Title: '', Town: '' } })

    useEffect(() => {
        getChargeInfo()
            .then(pointData => {
                console.log(pointData[0])
                setChargePoint(pointData[0])
                return null
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <div className='row'>

                <div className='col'>
                    <h2> Charging Station</h2>
                    <p>Name: {chargePoint.AddressInfo.Title}</p>
                    <p>State: {chargePoint.AddressInfo.StateOrProvince}</p>
                    <p>City: {chargePoint.AddressInfo.Town}</p>
                    <p>Address: {chargePoint.AddressInfo.AddressLine1}</p>
                </div>
            </div>
            {/* <div>< iframe src="https://map.openchargemap.io/?mode=embedded" allow="geolocation" frameborder="0" width="50%" height="500px" ></iframe ></div> */}
        </>
    )


}