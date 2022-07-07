import React from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { useEffect } from "react";
import { useStateProvider } from "../utils/Statereducer";
import axios from 'axios'

export default function Sidebar() {
  const [{token, playlists, images, genres, selectedPlaylistId}, dispatch] = useStateProvider();
  useEffect(() =>{
    const getPlaylistdata = async () => {
      const data = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      const playlists = await data.data.items
      const images = await data.data.images
      dispatch({type: 'SET_PLAYLIST', playlists})
      dispatch({type: 'SET_IMAGES', images})
    }

    const getGenres  = async () => {
      const genreData  = await axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`,{
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      const genres = genreData.data.genres;
      dispatch({type: 'SET_GENRES', genres})
    }

    getPlaylistdata();
    getGenres();

  }, [token, dispatch])

  // Function to change selected playlist id
  function changePlaylist(selectedPlaylistId){
    dispatch({type: 'SET_PLAYLIST_ID', selectedPlaylistId})
  }

  // Function to capitalize first letter of string
  function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <p>Playlists</p>
      <ul className="ul">
        {playlists && playlists.map((playlist, key) => {
          return(
            <li className="li" key={key} onClick={() =>
              changePlaylist(playlist.id)
            }>{playlist.name}<img src={playlist.images[0]?playlist.images[0].url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png'} alt={`${playlist.name} logo`}/> </li>
          )
        })}
      </ul>
      <p>Genres</p>
      <ul className="ul">
        {genres && genres.map((genres, key) => {
          return <>
            <li className="li" key={key}>{capitalize(genres) } </li>

          </>
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index:0;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
        opacity:100%;
        padding-top:10px;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      margin-top:2.2rem;
      padding-left: 2rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
  .ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    padding-left: 2rem;
    overflow: scroll;
    max-height: 100%;
    height:20vh;
    &::-webkit-scrollbar {
      width:0.7rem;
      height:0;
    }
    &::webkit-scrollbar-thumb {
      background-color: #b3b3b3;
    }


  }
  p{
    margin-top:1.2rem;
    padding-left: 2rem;
    color:#fff;
    font-size:1.2rem;
    font-weight:bold;

  }
  .li{
    display: flex;
    align-items: center;
    img{
      width:45px;
      height:40px;
      padding-left:5px
    }
    &:hover{
      color:'#fff';
      cursor: pointer;
    }
  }
`;