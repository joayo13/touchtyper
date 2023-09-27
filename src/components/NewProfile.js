import React from 'react'

function NewProfile({setProfileAdded, setCreateNewProfile}) {
    function handleCreateNewProfile(e) {
        let profiles = []
        if(e.target.name.value && e.target.color.value) {
          if(JSON.parse(localStorage.getItem('profiles').length > 0)) {
            profiles = JSON.parse(localStorage.getItem('profiles'))
          }
          profiles.push({name: e.target.name.value, color: e.target.color.value})
          localStorage.setItem('profiles', JSON.stringify(profiles))
          setCreateNewProfile(false)
          setProfileAdded(true)
        }
    }
  return (
    <div className='fixed flex items-center justify-center left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50'>
      <form onSubmit={(e)=> {e.preventDefault(); handleCreateNewProfile(e)}} className='flex flex-col gap-2 p-4 bg-gray-800 text-gray-300'>
        <strong className='text-center text-xl'>New profile</strong>
        <div>
        <label htmlFor='name'>Name:</label>
        <input required={true} className='bg-gray-700 text-neutral-300' name='name' id='name' type='text'></input>
        </div>
        <div>
        <label htmlFor='color'>Color: </label>
        <input required={true} name='color' type='color'></input>   
        </div>
        <div className='flex justify-evenly'>
            <button type='submit' className='bg-green-700 py-2 px-4'>Create</button>
            <button type='reset' onClick={() => setCreateNewProfile(false)} className='bg-red-700 py-2 px-4'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default NewProfile