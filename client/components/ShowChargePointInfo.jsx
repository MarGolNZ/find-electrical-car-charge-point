import React from 'react'

export default function GetChargeInfo(props) {
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h2> Charging Stations near you:</h2>
                    <ul>
                        {props.chargePoints.map(chargePointAddress => <li key={chargePointAddress.UUID}>
                            Name: {chargePointAddress.AddressInfo.Title}<br />
                            State: {chargePointAddress.AddressInfo.StateOrProvince}<br />
                            City: {chargePointAddress.AddressInfo.Town}<br />
                            Address: {chargePointAddress.AddressInfo.AddressLine1}<br />
                            Comments: {chargePointAddress.AddressInfo.AccessComments}<br />
                            Latitude: {chargePointAddress.AddressInfo.Latitude}<br />
                            Longitude: {chargePointAddress.AddressInfo.Longitude}<br />
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}