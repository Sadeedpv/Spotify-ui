import React from "react";
import styled from "styled-components";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useStateProvider } from "../utils/Statereducer";

function Playercontrol() {
    const [{token, playingState, currentTrack}, dispatch] = useStateProvider();


    const changeTrack = async (type) =>{
        console.log(`The button is clicked`)
        // PREMIUM REQUIRED FOR THE FOLLOWING FUNCTIONS TO WORK

        // await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {}, {
        //     headers:{
        //         Authorization: `Bearer ${token}`,
        //         'Content-Type': 'application/json'
        //     }
        // })
        // const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`,{
        //     headers:{
        //         Authorization: `Bearer ${token}`,
        //         'Content-Type': 'application/json'
        //     }
        // })
        // if(response.data !== '' && response.data !== null){
        //     console.log(response.data.item)
        //     const currentTrack = await response.data.item;
        //     dispatch({type:'SET_CURRENT_TRACK', currentTrack})
        // }else{
        //     dispatch({type:'SET_CURRENT_TRACK', currentTrack: null})
        // }

    }

    const changeState =() =>{
        dispatch({type:'SET_PLAYING_STATE', playingState: !playingState})
    }

    
  return (
    <Container>
        <div className="shuffle">
            <BsShuffle />
        </div>
        <div className="previous">
            <CgPlayTrackPrev onClick={() => changeTrack('previous')}/>
        </div>
        <div className="state">
            {playingState? <BsFillPauseCircleFill onClick={changeState} />: <BsFillPlayCircleFill onClick={changeState} />}
        </div>
        <div className="next">
            <CgPlayTrackNext onClick={() => changeTrack('next')}/>
        </div>
        <div className="repeat">
            <FiRepeat />
        </div>

    </Container>
  )
}

export default Playercontrol

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
svg {
  color: #b3b3b3;
  transition: 0.2s ease-in-out;
  &:hover {
    color: white;
  }
}
.state {
  svg {
    color: white;
  }
}
.previous,
.next,
.state {
  font-size: 2rem;
}

`