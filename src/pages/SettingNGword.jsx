import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SettingNGword = ({ NGword, onBlur }) => {
  const navigate = useNavigate()

  const handleToGamePage = () => {
    navigate('/game')
  }

  return (
    <form onSubmit={handleToGamePage}>
      <div>
        <label>
          NGワード：
          <input type='text' onBlur={(event) => onBlur(event)} />
        </label>
      </div>
      <input type='submit' value='Submit' />
    </form>
  )
}
