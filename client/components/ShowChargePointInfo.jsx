import React from 'react'

export default function GetChargeInfo(props) {

    if (props.chargePoints.length === 0) {
        return <h2>Looking for sharging stations near you...</h2>

    } else {
        return (
            <div className='info'>
                <h2 className='location-header'> Found following charging stations near you:</h2>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {props.chargePoints.map(chargePointAddress => <li className="list-group-item" key={chargePointAddress.UUID}>
                            <h3>{chargePointAddress.AddressInfo.Title}</h3>
                            Address: {chargePointAddress.AddressInfo.AddressLine1}<br />
                            Comments: {chargePointAddress.AddressInfo.AccessComments}<br />
                            City: {chargePointAddress.AddressInfo.Town}<br />
                            State: {chargePointAddress.AddressInfo.StateOrProvince}<br />
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}