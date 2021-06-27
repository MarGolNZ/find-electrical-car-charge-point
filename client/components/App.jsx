import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import GetChargeInfo from "./GetChargeInfo"
// import SearchChargePoint from './SearchChargePoint'
import ChargePoinstMap from './ChargePoinstMap'
import { usePosition } from 'use-position'

const App = () => {
  const watch = true;
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch)

  if (latitude == undefined || longitude == undefined) {
    return "Map is loading..."
  }

  return (
    <>
      <div style={{ height: '500px' }}><ChargePoinstMap latitude={latitude} longitude={longitude} /></div>


      <code>
        Test Geolocation Data
        latitude: {latitude}<br />
        longitude: {longitude}<br />
        timestamp: {timestamp}<br />
        accuracy: {accuracy && `${accuracy}m`}<br />
        error: {error}
      </code>


    </>
  )
}

export default App
