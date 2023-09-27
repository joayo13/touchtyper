import React, { useEffect, useState } from 'react'

function Keyboard({keyChar, round}) {
  const [leftTranslate, setLeftTranslate] = useState(0)
  const [rightTranslate, setRightTranslate] = useState(0)
  const [levelFinished, setLevelFinished] = useState(false)
  useEffect(() => {
    if(round === 1) {
      setLeftTranslate(52)
      return
    }
    if(round === 2) {
      setRightTranslate(52)
      return
    }
    if(round === 3) {
      setLeftTranslate(104)
      return
    }
    if(round === 4) {
      setRightTranslate(104)
      return
    }
    if(round === 5) {
      setLeftTranslate(156)
      return
    }
    if(round === 6) {
      setRightTranslate(156)
      return
    }
    if(round === 7) {
      setLeftTranslate(208)
      return
    }
    if(round === 8) {
      setRightTranslate(208)
      return
    }
    if(round === 9) {
      setLeftTranslate(260)
      return
    }
    if(round === 10) {
      setRightTranslate(260)
      setLevelFinished(true)
      return
    }
    
  },[round])
  
  return (
    <div style={levelFinished ? {color: 'green'} : null} className={levelFinished ? 'relative max-w-xl mx-auto animate-pulse' : 'relative max-w-xl mx-auto'}>
     <div style={{transform: `translateX(${leftTranslate}%)`}} className='absolute left-0 flex flex-col'>
        <ul className='flex'>
            <li style={keyChar === 'q' ? {color: 'green'} : null}>Q</li>
            <li style={keyChar === 'w' ? {color: 'green'} : null}>W</li>
            <li style={keyChar === 'e' ? {color: 'green'} : null}>E</li>
            <li style={keyChar === 'r' ? {color: 'green'} : null}>R</li>
            <li style={keyChar === 't' ? {color: 'green'} : null}>T</li>
        </ul>
        <ul className='flex'>
            <li style={keyChar === 'a' ? {color: 'green'} : null}>A</li>
            <li style={keyChar === 's' ? {color: 'green'} : null}>S</li>
            <li style={keyChar === 'd' ? {color: 'green'} : null}>D</li>
            <li style={keyChar === 'f' ? {color: 'green'} : null}>F</li>
            <li style={keyChar === 'g' ? {color: 'green'} : null}>G</li>
        </ul>
        <ul className='flex'>
            <li style={keyChar === 'z' ? {color: 'green'} : null}>Z</li>
            <li style={keyChar === 'x' ? {color: 'green'} : null}>X</li>
            <li style={keyChar === 'c' ? {color: 'green'} : null}>C</li>
            <li style={keyChar === 'v' ? {color: 'green'} : null}>V</li>
            <li style={keyChar === 'b' ? {color: 'green'} : null}>B</li>
        </ul>
     </div>
     <div style={{transform: `translateX(-${rightTranslate}%)`}} className='flex absolute right-0 flex-col'>
     <ul className='flex'>
            <li style={keyChar === 'y' ? {color: 'green'} : null}>Y</li>
            <li style={keyChar === 'u' ? {color: 'green'} : null}>U</li>
            <li style={keyChar === 'i' ? {color: 'green'} : null}>I</li>
            <li style={keyChar === 'o' ? {color: 'green'} : null}>O</li>
            <li style={keyChar === 'p' ? {color: 'green'} : null}>P</li>
     </ul>
     <ul className='flex'>
            <li style={keyChar === 'h' ? {color: 'green'} : null}>H</li>
            <li style={keyChar === 'j' ? {color: 'green'} : null}>J</li>
            <li style={keyChar === 'k' ? {color: 'green'} : null}>K</li>
            <li style={keyChar === 'l' ? {color: 'green'} : null}>L</li>
     </ul>
     <ul className='flex'>
        <li style={keyChar === 'n' ? {color: 'green'} : null}>N</li>
        <li style={keyChar === 'm' ? {color: 'green'} : null}>M</li>
     </ul>
     </div>
    </div>
  )
}

export default Keyboard