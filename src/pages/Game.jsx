import React from 'react'

export const Game = ({ NGword }) => {
  return (
    <div className='game'>
      <div> 
        <input type='checkbox' />
        <p>{NGword}</p>
      </div>
    </div>
  )
}
