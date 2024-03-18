import { Link } from 'react-router-dom'
import './index.css'

function Home() {
  return (
    <div id='home-container'>
      <h1>Welcome to Conway&apos;s Game of Life</h1>
      <p>
        Conway&apos;s Game of Life is a cellular automaton devised by the
        British mathematician John Horton Conway in 1970. It is a zero-player
        game, meaning that its evolution is determined by its initial state,
        requiring no further input.
      </p>
      <h2>Rules</h2>
      <ul>
        <li>A living cell with less than two living neighbors dies.</li>
        <li>A living cell with two or three live neighbors lives.</li>
        <li>A living cell with more than three live neighbors dies.</li>
        <li>
          A dead cell with exactly three live neighbors becomes a live cell, as
          if by reproduction.
        </li>
      </ul>
      <h2>Core Functionality</h2>
      <p>
        On the game page, you will see a grid where each cell can be alive or
        dead. You can interact with the cells by toggling their state and
        advancing to the next generation. Enjoy!
      </p>
      <Link to={'/game'} className='button'>
        Start Game
      </Link>
    </div>
  )
}

export default Home
