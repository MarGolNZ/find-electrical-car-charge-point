import React, { useEffect, useState } from 'react'
import ChargePointMap from './ChargePointMap'
import { usePosition } from 'use-position'
import BounceLoader from "react-spinners/BounceLoader"
import { getChargeInfo } from '../apiClient'

const App = () => {
  const [chargePoints, setChargePoints] = useState([])
  const watch = true;
  const { latitude, longitude } = usePosition(watch)

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      getChargeInfo([latitude, longitude])
        .then(positions => {
          const usedPositionIds = []
          console.log('App component getChargeInfo log:', positions[0])
          setChargePoints(positions.filter(function (position) {
            if (!usedPositionIds.includes(position.ID)) {
              usedPositionIds.push(position.ID)
              return true
            } else {
              return false
            }
          }))
        })
        .catch(e => console.log(e))
    }
  }, [latitude, longitude])

  if (latitude == undefined || longitude == undefined) {
    return (
      <div className='loader'>
        <h2>Map is loading... </h2>
        <BounceLoader color={'blue'} size={60} />
      </div>
    )
  }

  return (
    <ChargePointMap latitude={latitude} longitude={longitude} chargePoints={chargePoints} />
  )
}

export default App
