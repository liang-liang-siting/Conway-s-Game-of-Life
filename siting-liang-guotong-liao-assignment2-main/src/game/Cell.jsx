import { useContext } from 'react'
import PropTypes from 'prop-types'
import { GameContext } from '../Game'

const Cell = ({ i, j }) => {
  const { grid, setGrid, heatmapMode } = useContext(GameContext)

  const calculateColor = () => {
    if (!heatmapMode) return grid[i][j] === 0 ? 'black' : 'white'
    if (grid[i][j] === 0) {
      return 'black' // Alive cells are black
    } else if (grid[i][j] >= 10) {
      return 'white' // Dead cells are white after 10 iterations
    } else {
      // Calculate gradient color based on the number of iterations
      const maxIterations = 10
      const colorValue = Math.round((grid[i][j] / maxIterations) * 255)
      const gradientColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`
      return gradientColor
    }
  }

  const reverseCell = () => {
    const newGrid = grid.map((row) => [...row])
    newGrid[i][j] = grid[i][j] === 0 ? 1 : 0
    setGrid(newGrid)
  }

  return (
    <div
      className='cell'
      style={{
        width: '20px',
        height: '20px',
        border: '1px solid gray',
        backgroundColor: calculateColor(),
      }}
      onClick={reverseCell}
    />
  )
}

Cell.propTypes = {
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,
}

export default Cell
