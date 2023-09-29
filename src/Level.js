import React, { useEffect, useState } from 'react'
import Introduction from './Introduction'
import Keyboard from './components/Keyboard'
import { level1 } from './levels/level1'
import { level2 } from './levels/level2'
import { level3 } from './levels/level3'
import { level4 } from './levels/level4'
import { level5 } from './levels/level5'
import { level6 } from './levels/level6'
import { level7 } from './levels/level7'
import { level8 } from './levels/level8'
import sfx0 from './sounds/0fx.mp3'
import sfx1 from './sounds/1fx.mp3'
import sfx2 from './sounds/2fx.mp3'
import sfx3 from './sounds/3fx.mp3'
import sfx4 from './sounds/4fx.mp3'
import sfx5 from './sounds/5fx.mp3'
import sfx6 from './sounds/6fx.mp3'
import errorSound from './sounds/errorsfx.mp3'
import wordPass from './sounds/wordvictoryfx.mp3'
import levelComplete from './sounds/levelcompletesfx.mp3'
import levelFailedSfx from './sounds/levelfailedsfx.mp3'
import radiohead from './sounds/endscreen.mp3'
import useSound from 'use-sound'
function Level({playerOne, playerTwo}) {
  const [level, setLevel] = useState(null)
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const [timer, setTimer] = useState(60)
  const [keyChar, setKeyChar] = useState(null)
  const [levelArray, setLevelArray] = useState([])
  const [round, setRound] = useState(0)
  const [wordInput, setWordInput] = useState('')
  const [levelStarted, setLevelStarted] = useState(false)
  const [endLevelScreen, setEndLevelScreen] = useState(false)
  const [levelFailed, setLevelFailed] = useState(false)
  const [win, setWin] = useState(false)
  const [boop0] = useSound(sfx0)
  const [boop1] = useSound(sfx1)
  const [boop2] = useSound(sfx2)
  const [boop3] = useSound(sfx3)
  const [boop4] = useSound(sfx4)
  const [boop5] = useSound(sfx5)
  const [boop6] = useSound(sfx6)
  const [wordVictory] = useSound(wordPass)
  const [errorSfx] = useSound(errorSound)
  const [levelVictory] = useSound(levelComplete)
  const [levelFail] = useSound(levelFailedSfx)
  const [endMusic] = useSound(radiohead)
  useEffect(() => {
    if(!levelStarted || endLevelScreen || win) {
      return
    }
    if(timer <= 0) {
      setLevelFailed(true)
      levelFail()
      setTimeout(() => {
        setLevelStarted(false)
        setRound(0)
        setWordInput('')
        setKeyChar(null)
        setTimer(60)
        setPlayerOneTurn(true)
        setLevelFailed(false)
      },5000)
      return
    }
    setTimeout(() => {
      setTimer(prev => prev - 1)
    },1000)
  },[timer, levelStarted])
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
        return
    }
    if(level === 2) {
        setLevelArray(level2)
        return
    }
    if(level === 3) {
        setLevelArray(level3)
        return
    }
    if(level === 4) {
      setLevelArray(level4)
      return
    }
    if(level === 5) {
      setLevelArray(level5)
      return
  }
  if(level === 6) {
      setLevelArray(level6)
      return
  }
  if(level === 7) {
      setLevelArray(level7)
      return
  }
  if(level === 8) {
    setLevelArray(level8)
    return
  }
  if(level === 9) {
    setWin(true)
    return
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
        wordVictory()
        setRound(prev => prev + 1)
        setPlayerOneTurn(!playerOneTurn)
        setWordInput('')
        return
    }
      if(wordInput.length === 1) {
        boop0()
      }
      if(wordInput.length === 2) {
        boop1()
      }
      if(wordInput.length === 3) {
        boop2()
      }
      if(wordInput.length === 4) {
        boop3()
      }
      if(wordInput.length === 5) {
        boop4()
      }
      if(wordInput.length === 6) {
        boop5()
      }
      if(wordInput.length === 7) {
        boop6() 
      }
        return
    }
    errorSfx()
    setWordInput('')
  },[wordInput])
  useEffect(() => {
    if(round === 10) {
        setEndLevelScreen(true)
        levelVictory()
        setTimeout(() => {
        setLevelStarted(false)
        setEndLevelScreen(false)
        playersLevelUpHandler()
        },5000)
        
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
    setTimer(60)
    setPlayerOneTurn(true)
  }
  return (
    <div className='text-gray-300'>
      {level === 0 ? <Introduction setLevel={setLevel}/> : 
      <>
      {!levelStarted ? 
      <div className='flex h-screen w-screen items-center justify-center'>
        <button className='bg-green-700 py-2 px-4' onClick={() => { level < 9 ? setLevelStarted(true) : endMusic(); setLevelStarted(true)}}>{level < 9 ? `Start Level ${level}` : '???'}</button>
      </div> : 
      <>
      {win ? 
      <h2 className='text-center text-9xl py-8 animate-pulse text-green-700'>YOU BEAT THE GAME! WOOHOO.</h2>
      : <>
      {levelFailed ? <h2 className='text-6xl text-center py-4 text-red-700 animate-pulse'>LEVEL FAILED</h2> : null}
      {endLevelScreen ? <h2 className='text-6xl text-center py-4 text-green-700 animate-pulse'>LEVEL COMPLETE!</h2> : null}
      <h2 className='text-6xl text-center py-4'>Level {level}:</h2>
      <h3 className='text-4xl text-center py-4'>Turn: <strong style={playerOneTurn ? {color: playerOne.color} : {color: playerTwo.color}}>P{playerOneTurn ? '1' : '2'}</strong></h3>
      <h3 className={timer > 15 ? 'text-xl text-center' : 'text-xl text-center text-red-700 animate-pulse'}>Time: {timer}</h3>
      <Keyboard keyChar={keyChar} round={round}/>
      <input disabled={endLevelScreen || levelFailed} autoFocus className='block mx-auto my-24 bg-gray-800 py-2 px-4 text-center' value={wordInput} type='text' onKeyDown={(e) => {handleKeyDown(e); setWordInput(prev => prev + e.key.toLowerCase())}}></input>
      <p className='w-min mx-auto relative text-6xl'>{levelArray[round]}
      <p className='absolute text-6xl top-0 left-0 text-green-700 text-center'>{wordInput}</p>
      </p></>}
      </>}
      
      </>
      }
      
    </div>
  )
}

export default Level