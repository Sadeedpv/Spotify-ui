import React from 'react'
import styled from 'styled-components'
import CurrentTrack from './CurrentTrack'
import Playercontrol from './Playercontrol'
import Volume from './Volume'

function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <Playercontrol />
      <Volume />
    </Container>
  )
}

export default Footer

const Container = styled.div`
height: 100%;
background-color: black;
border-top:2px solid #282828;
display:grid;
align-items:center;
justify-content:center;
grid-template-columns:1fr 2fr 1fr;
width:100%;
z-index:2;
padding: 0 2rem;
`