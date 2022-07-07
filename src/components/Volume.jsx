import React from 'react'
import styled from 'styled-components'
import {BsVolumeUp} from 'react-icons/bs'

function Volume() {
  return (
    <Container>
        <div className='center'><BsVolumeUp size={25} /></div>
        <div className='center'><input type='range' className='progress'/></div>
    </Container>
  )
}

export default Volume

const Container = styled.div`
display: flex;
justify-content: flex-end;
align-content: center;
align-items: center;
.progress{
  width: 15rem;
  border-radius: 2rem;
  height: 0.5rem;
}
svg{
    color:white;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
}
.center{
    display: flex;
    align-items: center;
}
`