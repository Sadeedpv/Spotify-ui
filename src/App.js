import { useEffect } from "react";
import Decider from "./components/Decider";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { useStateProvider } from "./utils/Statereducer";

function App() {
  const [{token}, dispatch] = useStateProvider();
  useEffect(() =>{
    const hash = window.location.hash;
    if (hash){
      // This is the acces token

      const token = hash.substring(1).split('&')[0].split('=')[1];
      dispatch({ type: "SET_TOKEN", token });
    }
  }, [dispatch, token])
  return <div>{token ? <Decider /> : <Login />}</div>;
}

export default App;
