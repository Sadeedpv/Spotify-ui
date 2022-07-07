import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/Statereducer";


export default function Navbar({ navbg }) {
  const [{ token, user }] = useStateProvider();
  return (
    <Container navbg={navbg}>
      <div className="search__bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </div>
      <div className="avatar">
        <a href={user?.external_urls.spotify}>
          <CgProfile />
          <span>{user?.display_name}</span>
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 1.6rem;
  height: 12vh;
  position: sticky;
  top: 0;
  z-index:1;
  transition: 0.3s ease-in-out;
  background-color: ${({ navbg }) =>
    navbg ? "black" : "none"};
      .search__bar {
        background-color: white;
        width: 30%;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        input {
          border: none;
          height: 1.5rem;
          &:focus {
            outline: none;
          }
        }
      }

    }

  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
`;