import React, { useState, useEffect } from 'react'
import { getChargeInfo } from '../apiClient.js'

export default function GetChargeInfo(props) {
    const [chargePoint, setChargePoint] = useState([])

    useEffect(() => {
        getChargeInfo(props.position)
            .then(position => {
                console.log(position[0])
                setChargePoint(position)
                return null
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h2> Charging Stations near you:</h2>
                    <ul>
                        {chargePoint.map(chargePointAddress => <li key={chargePointAddress.UUID}>
                            Name: {chargePointAddress.AddressInfo.Title}
                            State: {chargePointAddress.AddressInfo.StateOrProvince}
                            City: {chargePointAddress.AddressInfo.Town}
                            Address: {chargePointAddress.AddressInfo.AddressLine1}
                            Comments: {chargePointAddress.AddressInfo.AccessComments}
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    )
    // { AddressInfo: { AddressLine1: '', StateOrProvince: '', Title: '', Town: '' } }

}