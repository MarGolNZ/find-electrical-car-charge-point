import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
// import GetChargeInfo from "./GetChargeInfo"
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

  return (
    <>
      <div style={{ width: '100%' }} >
        <ChargePoinstMap />
      </div>
      < div className='row' >
        <div className='col'>
          <code>
            Test Geolocation Data
            latitude: {latitude}<br />
            longitude: {longitude}<br />
            timestamp: {timestamp}<br />
            accuracy: {accuracy && `${accuracy}m`}<br />
            error: {error}
          </code>
        </div>
      </div >

    </>
  )
}

export default App
