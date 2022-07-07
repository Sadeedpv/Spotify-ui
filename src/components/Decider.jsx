import React from 'react'
import Smallerdevices from './Smallerdevices'
import Spotify from './Spotify'

function Decider() {
  return (
    <>
        {
            window.innerWidth > 1200?<Spotify />:<Smallerdevices />
        }
    </>
  )
}

export default Decider