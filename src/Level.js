import React, { useEffect, useState } from 'react'
import Introduction from './Introduction'
import Keyboard from './components/Keyboard'

function Level({playerOne, playerTwo}) {
  const [level, setLevel] = useState(null)
  const [playerTurn, setPlayerTurn] = useState(1)
  const [timer, setTimer] = useState(60)
  const [keyChar, setKeyChar] = useState(null)
  useEffect(() => {
    if(playerOne.level === 0 && playerTwo.level === 0) {
        setLevel(0)
    }
    if(playerOne.level > playerTwo.level) {
        setLevel(playerOne.level)
        return
    }
    if(playerTwo.level > playerOne.level) {
        setLevel(playerTwo.level)
    }
  },[])
  function handleKeyDown(e) {
    setKeyChar(e.key)
  }
  return (
    <div className='text-gray-300'>
      {level === 0 ? <Introduction setLevel={setLevel}/> : 
      <>
      <h2 className='text-6xl text-center py-4'>Level {level}:</h2>
      <h3 className='text-3xl text-center'>Turn: <strong style={{color: playerOne.color}}>P{playerTurn}</strong></h3>
      <h3 className='text-xl text-center'>Time: {timer}</h3>
      <Keyboard keyChar={keyChar}/>
      <input autoFocus className='block mx-auto my-24 text-black' type='text' onKeyDown={(e) => handleKeyDown(e)}></input>
      </>}
      
    </div>
  )
}

export default Level