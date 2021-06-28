import React from 'react'
import { getChargeInfo } from '../apiClient.js'

export default function GetChargeInfo(props) {




    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h2> Charging Stations near you:</h2>
                    <ul>
                        {props.chargePoints.map(chargePointAddress => <li key={chargePointAddress.UUID}>
                            Name: {chargePointAddress.AddressInfo.Title}
                            State: {chargePointAddress.AddressInfo.StateOrProvince}
                            City: {chargePointAddress.AddressInfo.Town}
                            Address: {chargePointAddress.AddressInfo.AddressLine1}
                            Comments: {chargePointAddress.AddressInfo.AccessComments}
                            Latitude: {chargePointAddress.AddressInfo.Latitude}
                            Longitude: {chargePointAddress.AddressInfo.Longitude}
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    )
    // { AddressInfo: { AddressLine1: '', StateOrProvince: '', Title: '', Town: '' } }

}