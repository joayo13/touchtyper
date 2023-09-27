import React from 'react'

function Introduction({playerOne, playerTwo, setLevel}) {
  return (
    <div className='flex flex-col items-center justify-center text-gray-300'>
      <h2 className='py-4 text-6xl'>Tutorial</h2>
      <p>Welcome to <strong className='text-green-700'>Touch Typer!</strong> Here's how the game works:</p>
      <ol className='py-4 list-disc flex flex-col gap-4 max-w-xl'>
        <li>Player One takes all the left hand keys, and Player Two takes the right hand.</li>
        <li>You will take turns alternating from left hand only words to right hand only words in each level.</li>
        <li>Each level must be finished before the timer runs out.</li>
        <li>If you press an incorrect key, the input will reset and you will have to start at the first letter again.</li>
      </ol>
      <p className='max-w-xl text-3xl'>Don't worry, this level will be an easy one..</p>
      <button onClick={() => setLevel(1)} className='animate-pulse bg-green-700 block mx-auto my-4 py-8 px-16 text-6xl'>Start Level 1</button>
    </div>
  )
}

export default Introduction