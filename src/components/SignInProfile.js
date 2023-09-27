import React from 'react'

function SignInProfile({profile, setSignIn, setPlayerOne, setPlayerTwo, playerOne, playerTwo}) {
  function handleSignIn() {
    if(!playerOne.name) {
        setPlayerOne(profile)
        setSignIn(false)
    } else {
        setPlayerTwo(profile)
        setSignIn(false)
    }
  }
  return (
    <div className='fixed flex items-center justify-center left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50'>
      <section className='flex flex-col gap-2 p-4 bg-gray-800 text-gray-300'>
        <p className='text-center text-xl'>Sign in as {profile.name}?</p>
        <div className='flex justify-evenly'>
          <button onClick={() => handleSignIn()} className='bg-green-700 py-2 px-4'>Sign In</button>
          <button onClick={() => setSignIn(false)} className='bg-red-700 py-2 px-4'>Cancel</button>
        </div>
      </section>
    </div>
  )
}

export default SignInProfile