import { useContext } from 'react'
import { GameContext } from '../Game'
import './index.css'

export default function ControlBar() {
  const { resetGrid, nextStep, toggleAutoPlay, autoPlayMode } = useContext(GameContext)

  return (
    <div className='controls-container'>
      <button className='game-button' onClick={resetGrid}>
        Reset
      </button>
      <button className='game-button' onClick={nextStep}>
        Next Step
      </button>
      <button className='game-button' style={{
        backgroundColor: autoPlayMode ? '#0070FF' : '',
        color: autoPlayMode ? 'white' : ''
      }} onClick={toggleAutoPlay}>
        Auto Play
      </button>
    </div>
  )
}
