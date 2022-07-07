import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import Body from './Body';
import Footer from './Footer'
import Navbar from './Navbar'
import Siderbar from './Siderbar'
import { useStateProvider } from "../utils/Statereducer";

import axios from 'axios'
import { useRef } from 'react';
import { useState } from 'react';

function Spotify() {

  // reference to the DOM element
  const ref = useRef();
  // States for navbar and header background color
  const [navbg, setnavbg] = useState();
  const [headerbg, setheaderbg] = useState();
  
  const scrolled = () => {
    ref.current.scrollTop >= 30? setnavbg(true) : setnavbg(false);
    ref.current.scrollTop >= 240? setheaderbg(true) : setheaderbg(false);
  }

  const [{token, user}, dispatch] = useStateProvider();

  useEffect(() =>{
    const userInfo = async () => {
      const userdata = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      const user = userdata.data;

      dispatch({type: 'SET_USER', user})
    }

    userInfo();
  },[dispatch, token])

  return (
    <Container>
    <div className="spotify__body">
      <Siderbar />
      <div className="body" ref={ref} onScroll={scrolled}>
        <Navbar navbg={navbg}/>
        <div className="body__contents">
          <Body headerbg={headerbg}/>
        </div>
      </div>
    </div>
    <div className="spotify__footer">
      <Footer />
    </div>
  </Container>
  )
}

export default Spotify

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;