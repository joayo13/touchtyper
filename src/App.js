import { useEffect, useState } from 'react';
import keys from './keys.png'
import NewProfile from './components/NewProfile';

function App() {
  const [profiles, setProfiles] = useState([])
  const [profileAdded, setProfileAdded] = useState(false)
  useEffect(() => {
    setProfiles(JSON.parse(localStorage.getItem('profiles')))
    setProfileAdded(false)
  },[profileAdded])
  const [createNewProfile, setCreateNewProfile] = useState(false)
  return (
    <div className="text-gray-300">
      <h1 className="py-8 text-center text-6xl">Touch Typer</h1>
      <img className='mx-auto' src={keys}></img>
      <section className='flex justify-center gap-8 mx-auto'>
      {profiles.map((profile) => 
      <div className='flex flex-col gap-2 items-center text-center'>
        <button style={{backgroundColor: profile.color}} className='max-w-min p-8 rounded-full text-3xl'>{profile.name[0]}</button>
      <p>{profile.name}</p>
      </div>)}
      <div className='flex flex-col gap-2 items-center text-center'>
      <button onClick={() => setCreateNewProfile(true)} className='bg-gray-600 max-w-min p-8 rounded-full text-3xl'>+</button>
      <p>New Profile</p>
      </div>

      </section>
      {createNewProfile ? <NewProfile setProfileAdded={setProfileAdded} setCreateNewProfile={setCreateNewProfile}/> : null}
    </div>
  );
}

export default App;
