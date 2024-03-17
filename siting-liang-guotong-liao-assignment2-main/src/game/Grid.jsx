import { useContext } from 'react'
import { GameContext } from '../Game'
import Cell from './Cell'
import './index.css'

export default function Grid() {
  const { grid } = useContext(GameContext)
  const aliveCellsCount = grid.flat().filter((cell) => cell === 0).length
  return (
    <div className='grid-container'>
      <h4>Current Alive Cells: {aliveCellsCount}</h4>
      <div
        className='grid-layout'
        style={{
          gridTemplateColumns: `repeat(${grid[0]?.length}, 20px)`,
          gridTemplateRows: `repeat(${grid?.length}, 20px)`,
        }}
      >
        {grid.map((row, i) =>
          row.map((_, j) => <Cell key={`${i} ${j}`} i={i} j={j} />)
        )}
      </div>
    </div>
  )
}
