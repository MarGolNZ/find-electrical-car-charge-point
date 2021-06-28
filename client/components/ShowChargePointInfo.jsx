import React, { useState, useEffect } from 'react'
import { getChargeInfo } from '../apiClient.js'

export default function GetChargeInfo(props) {
    const [chargePoint, setChargePoint] = useState({ AddressInfo: { AddressLine1: '', StateOrProvince: '', Title: '', Town: '' } })

    useEffect(() => {
        getChargeInfo(props.position)
            .then(position => {
                console.log(position[0])
                setChargePoint(position[0])
                return null
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <div className='row'>

                <div className='col'>
                    <h2> Charging Stations near you:</h2>
                    <p>Name: {chargePoint.AddressInfo.Title}</p>
                    <p>State: {chargePoint.AddressInfo.StateOrProvince}</p>
                    <p>City: {chargePoint.AddressInfo.Town}</p>
                    <p>Address: {chargePoint.AddressInfo.AddressLine1}</p>
                </div>
            </div>

        </>
    )


}