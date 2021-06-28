import React, { useState } from 'react'
import Header from './Header'
import ChargePoinstMap from './ChargePoinstMap'
import { usePosition } from 'use-position'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader"

const App = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff")



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
      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

        <ClipLoader color={color} loading={loading} css={override} size={150} />
      </div>
    )
  }

  return (
    <>
      <Header />
      <ChargePoinstMap latitude={latitude} longitude={longitude} />
    </>
  )
}

export default App
