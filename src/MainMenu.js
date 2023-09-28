import React, { useEffect, useState } from 'react'
import keys from './keys.png'
import NewProfile from './components/NewProfile';
import SignInProfile from './components/SignInProfile';

function MainMenu({playerOne, playerTwo, setPlayerOne, setPlayerTwo, setGameStarted}) {
  const [profiles, setProfiles] = useState([])
  const [profile, setProfile] = useState({})
  const [profileAdded, setProfileAdded] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [createNewProfile, setCreateNewProfile] = useState(false)
  useEffect(() => {
    setProfiles(JSON.parse(localStorage.getItem('profiles')))
    setProfileAdded(false)
  },[profileAdded])
  return (
    <div className="text-gray-300 relative">
      <div className='absolute text-3xl top-2 left-2'>
        <p className='text-red-700 animate-pulse'>P1: <strong style={{color: playerOne.color}}>{playerOne.name}</strong></p>
        <p className='text-green-700 animate-pulse'>P2: <strong style={{color: playerTwo.color}}>{playerTwo.name}</strong></p>
      </div>
      <h1 className="py-8 text-center text-6xl text-green-500">Touch Typers</h1>
      <h2 className='text-center'>The 2 Player Touch Typing Game</h2>
      <img className='mx-auto' src={keys}></img>
      <section className='flex justify-center gap-8 mx-auto'>
      {profiles.map((profile) => 
      <div className='flex flex-col gap-2 items-center text-center'>
        <button onClick={() =>{setProfile(profile); setSignIn(true)}} style={{backgroundColor: profile.color}} className='max-w-min p-8 rounded-full text-3xl'>{profile.name[0]}</button>
      <p>{profile.name}</p>
      </div>)}
      <div className='flex flex-col gap-2 items-center text-center'>
      <button onClick={() => setCreateNewProfile(true)} className='bg-gray-600 max-w-min p-8 rounded-full text-3xl'>+</button>
      <p>New Profile</p>
      </div>
      <div className='flex flex-col gap-2 items-center text-center'>
      <button onClick={() => localStorage.setItem('profiles', JSON.stringify([]))} className='bg-red-600 max-w-min p-8 rounded-full text-3xl'>X</button>
      <p>clear profiles</p>
      </div>
      </section>
      {playerOne.name && playerTwo.name ? <button onClick={() => setGameStarted(true)} className='animate-pulse bg-green-700 block mx-auto py-8 px-16 text-3xl my-4'>Start Game</button> : null}
      {createNewProfile ? 
      <NewProfile 
      setProfileAdded={setProfileAdded} 
      setCreateNewProfile={setCreateNewProfile}/> : null}
      {signIn ? 
      <SignInProfile 
       playerOne={playerOne}
       playerTwo={playerTwo}
       setPlayerOne={setPlayerOne}
       setPlayerTwo={setPlayerTwo} 
       setSignIn={setSignIn} 
       profile={profile}/> : null}
    </div>
  )
}

export default MainMenu