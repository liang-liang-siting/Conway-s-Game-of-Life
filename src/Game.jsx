import { createContext, useState, useEffect, useCallback } from 'react'
import ControlBar from './game/ControlBar'
import Grid from './game/Grid'
import GridAttributes from './game/GridAttributes'
import './index.css'

export const GameContext = createContext()

const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
]

// const LONGLASTING_DIRECTIONS = [
//   [0, 2],
//   [0, -2],
//   [2, 0],
//   [-2, 0],
//   [2, 2],
//   [-2, -2],
//   [2, -2],
//   [-2, 2],
// ]

export default function Game() {
  // array of arrays
  const [grid, setGrid] = useState([])
  const [rows, setRows] = useState(20)
  const [cols, setCols] = useState(20)

  const [heatmapMode, setHeatmapMode] = useState(false)
  const [autoPlayMode, setAutoPlayMode] = useState(false)
  const [longerLasting, setLongerLasting] = useState(false)

  const randomAlive = () => {
    // 5% is too low
    // return 20% of cells as alive, which is 0, otherwise 1
    return Math.random() < 0.2 ? 0 : 1
  }

  // update grid state
  const nextStep = useCallback(() => {
    const newGrid = grid.map((row) => [...row])
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const cell = grid[i][j]
        let count = 0
        for (const [x, y] of DIRECTIONS) {
          const newI = i + x
          const newJ = j + y
          if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols) {
            count += grid[newI][newJ] === 0 ? 1 : 0
          }
        }
        if (cell === 0) {
          if (count < 2 || count > 3) {
            newGrid[i][j] = 1
          }
        } else {
          if (count === 3) {
            newGrid[i][j] = 0
          } else {
            newGrid[i][j]++
          }
        }
      }
    }
    setGrid(newGrid)
  }, [cols, grid, rows])

  // reset grid state
  const resetGrid = useCallback(() => {
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, randomAlive)
    )
    setGrid(newGrid)
  }, [cols, rows])

  useEffect(() => {
    resetGrid()
  }, [resetGrid])

  // auto play mode
  useEffect(() => {
    let intervalId
    if (autoPlayMode) {
      intervalId = setInterval(() => {
        nextStep()
      }, 100)
    } else {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [autoPlayMode, nextStep])

  // state updater function
  const toggleAutoPlay = () => {
    setAutoPlayMode((prevAutoPlayMode) => !prevAutoPlayMode)
  }

  return (
    <GameContext.Provider
      value={{
        grid,
        setGrid,
        rows,
        setRows,
        cols,
        setCols,
        heatmapMode,
        setHeatmapMode,
        autoPlayMode,
        toggleAutoPlay,
        longerLasting,
        setLongerLasting,
        resetGrid,
        nextStep,
      }}
    >
      <div className='game-container'>
        <GridAttributes />
        <Grid />
        <ControlBar />
      </div>
    </GameContext.Provider>
  )
}
