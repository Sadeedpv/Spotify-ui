import React from 'react'
import styled from 'styled-components'

function Login() {
    const handleClick = () =>{
        const client_id = process.env.REACT_APP_CLIENT_ID;
        const redirect_url = 'https://spotifyui-clone.netlify.app';
        const api_url = 'https://accounts.spotify.com/authorize'
        const scope = [
            'user-read-private',
            'user-read-email',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-position',
            'user-top-read',
        ]
        window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join('%20')}&response_type=token&show_dialg=true`

    }
  return (
    <Container>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='spotify logo'/>
        <button onClick={handleClick}>Login</button>
    </Container>
  )
}

export default Login

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #3dbf6b;
    gap:5rem;
    img{
        height:15vh
    }
    button{
        border-radius: 5rem;
        padding: 0.8rem 4rem;
        background-color: #000;
        color:#49f585;
        border:none;
        font-size:1.5rem;
        cursor:pointer;
    }

`