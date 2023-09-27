import React, { useEffect, useState } from 'react'
import Introduction from './Introduction'
import Keyboard from './components/Keyboard'
import { level1 } from './levels/level1'
import { level2 } from './levels/level2'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import { level3 } from './levels/level3'

function Level({playerOne, playerTwo}) {
  const [level, setLevel] = useState(null)
  const [playerTurn, setPlayerTurn] = useState(1)
  const [timer, setTimer] = useState(60)
  const [keyChar, setKeyChar] = useState(null)
  const [levelArray, setLevelArray] = useState([])
  const [round, setRound] = useState(0)
  const [wordInput, setWordInput] = useState('')
  const [levelStarted, setLevelStarted] = useState(false)
  useEffect(() => {
    if(playerOne.level === 0 && playerTwo.level === 0) {
        setLevelArray(level1)
        setLevel(0)
    }
    if(playerOne.level >= playerTwo.level) {
        setLevel(playerOne.level)
        return
    }
    if(playerTwo.level >= playerOne.level) {
        setLevel(playerTwo.level)
    }
  },[])
  useEffect(() => {
    if(level === 1) {
        setLevelArray(level1)
    }
    if(level === 2) {
        setLevelArray(level2)
    }
    if(level === 3) {
        setLevelArray(level3)
    }
  }, [level])
  function handleKeyDown(e) {
    setKeyChar(e.key)
  }
  useEffect(() => {
    if(wordInput === '') {
        return
    }
    if(wordInput[wordInput.length - 1] === levelArray[round][wordInput.length - 1]) {
        if(wordInput.length === levelArray[round]?.length) {
            setRound(prev => prev + 1)
            setWordInput('')
        }
        return
    }
    setWordInput('')
  },[wordInput])
  useEffect(() => {
    if(round === 9) {
        setLevelStarted(false)
        playersLevelUpHandler()
    }
  },[round])
  function playersLevelUpHandler() {
    const profiles = JSON.parse(localStorage.getItem('profiles'))
    let playerOneNew = profiles.find((profile) => profile.name === playerOne.name)
    let playerTwoNew = profiles.find((profile) => profile.name === playerTwo.name)
    playerOneNew.level = level + 1
    playerTwoNew.level = level + 1
    localStorage.setItem('profiles', JSON.stringify(profiles))
    setLevel(playerOneNew.level)
    setRound(0)
  }
  return (
    <div className='text-gray-300'>
      {level === 0 ? <Introduction setLevel={setLevel}/> : 
      <>
      {!levelStarted ? 
      <div className='flex h-screen w-screen items-center justify-center'>
        <button onClick={() => setLevelStarted(true)}>Start Level {level}</button>
      </div> : 
      <>
      <h2 className='text-6xl text-center py-4'>Level {level}:</h2>
      <h3 className='text-3xl text-center'>Turn: <strong style={{color: playerOne.color}}>P{playerTurn}</strong></h3>
      <h3 className='text-xl text-center'>Time: {timer}</h3>
      <Keyboard keyChar={keyChar}/>
      <input autoFocus className='block mx-auto my-24 text-black' value={wordInput} type='text' onKeyDown={(e) => {handleKeyDown(e); setWordInput(prev => prev + e.key)}}></input>
      <p className='text-center text-6xl'>{levelArray[round]}</p></>}
      
      </>}
      
    </div>
  )
}

export default Level