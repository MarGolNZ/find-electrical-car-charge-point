import React from 'react'

export default function GetChargeInfo(props) {

    if (props.chargePoints == undefined) {
        return <div>Loading...</div>

    } else {
        return (
            <>
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
            </>
        )
    }
}