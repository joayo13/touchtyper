import { useEffect, useState } from 'react';
import Level from './Level';
import MainMenu from './MainMenu';

function App() {
  const [playerOne, setPlayerOne] = useState({})
  const [playerTwo, setPlayerTwo] = useState({})
  const [gameStarted, setGameStarted] = useState(false)
  
  return (
    <>
    {gameStarted ? <Level playerOne={playerOne} playerTwo={playerTwo}/> : 
    <MainMenu 
      playerOne={playerOne} 
      playerTwo={playerTwo} 
      setPlayerOne={setPlayerOne}
      setPlayerTwo={setPlayerTwo}
      setGameStarted={setGameStarted}/>}
    </>
  );
}

export default App;
