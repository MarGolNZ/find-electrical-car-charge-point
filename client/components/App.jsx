import React, { useEffect, useState } from 'react'
import Header from './Header'
import ChargePointMap from './ChargePointMap'
import { usePosition } from 'use-position'
import BounceLoader from "react-spinners/BounceLoader"
import ShowChargePointInfo from './ShowChargePointInfo'
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
          console.log(positions)
          setChargePoints(positions.filter(function (position) {
            if (!usedPositionIds.includes(position.id)) {
              usedPositionIds.push(position.id)
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
      <ChargePointMap latitude={latitude} longitude={longitude} chargePoints={chargePoints} />
      <ShowChargePointInfo chargePoints={chargePoints} />
    </>
  )
}

export default App
