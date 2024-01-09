import { useState } from "react"
import StartGame from "./Components/StartGame"
import './index.css'
import GamePlay from "./Components/GamePlay";
// import App from './App.jsx' 
function App() {

  //define const for redireact to start game page
  const [isGameStarted, setIsGameStarted] = useState(false);

  //Redirect to start game page
  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev)
  }
  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle ={toggleGamePlay}/>}
    </>
  )
}

export default App
