import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useStateProvider } from "../utils/Statereducer";


function CurrentTrack() {
    const [{token, currentTrack}, dispatch] = useStateProvider();
    useEffect(() =>{
        const Playingtrack = async () => {
            const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            if(response.data !== '' && response.data !== null){
                console.log(response.data.item)
                const currentTrack = await response.data.item;
                dispatch({type:'SET_CURRENT_TRACK', currentTrack})
            }
        }

        Playingtrack();

    },[token, dispatch])
  return (
    <Container>
        {currentTrack && (
            <div className='track'>
                <div className='track-image'>
                    <img loading='lazy' alt='Banner/Thumbnail' src={currentTrack.album.images[2].url} />
                </div>
                <div className='track-info'>
                    <h4>{currentTrack.name}</h4>
                    <h6>{currentTrack.artists.map((e) =>{
                        return e.name + ','
                    })}</h6>
                </div>

            </div>
        )}
    </Container>
  )
}

export default CurrentTrack

const Container = styled.div`
.track{
    display: flex;
    align-items: center;
    gap: 1rem;
    .track-info{
        display: flex;
        flex-direction: column;
        color: #fff;
        gap: 0.5rem;
        h4{
            color: #fff;
        }
        h6{
            color:#b3b3b3;
            white-space: nowrap;
        }
    }
}
`