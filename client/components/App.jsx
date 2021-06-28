import React, { useState } from 'react'
import Header from './Header'
import ChargePointMap from './ChargePointMap'
import { usePosition } from 'use-position'
import BounceLoader from "react-spinners/BounceLoader"

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
    return (
      <div className='row' style={{ textAlign: 'center', marginTop: '150px' }}>
        <div className="col" >
          <h2>Map is loading... </h2><br />
          <p><BounceLoader color={'blue'} size={60} /></p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <ChargePointMap latitude={latitude} longitude={longitude} />
    </>
  )
}

export default App
