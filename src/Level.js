import React, { useEffect, useState } from 'react'
import Introduction from './Introduction'

function Level({playerOne, playerTwo}) {
  const [level, setLevel] = useState(null)
  const [playerTurn, setPlayerTurn] = useState(1)
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
  return (
    <div>
      {level === 0 ? <Introduction setLevel={setLevel}/> : null}
    </div>
  )
}

export default Level