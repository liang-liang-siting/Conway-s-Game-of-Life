import { useContext, useState } from 'react'
import { GameContext } from '../Game'
import './index.css'

export default function GridAttributes() {
  const {
    rows,
    setRows,
    cols,
    setCols,
    heatmapMode,
    setHeatmapMode,
    // longerLasting,
    // setLongerLasting,
  } = useContext(GameContext)
  const [width, setWidth] = useState(rows)
  const [height, setHeight] = useState(cols)

  function handleClick() {
    if (width < 3 || width > 40 || height < 3 || height > 40) {
      return
    }
    setCols(width)
    setRows(height)
  }

  return (
    <div className='attributes-container'>
      <div>
        <div className='attributes-height-width'>
          <div>
            <label htmlFor='rows'>Height</label>
            <input
              type='number'
              id='height'
              name='rows'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='cols'>Width</label>
            <input
              type='number'
              id='width'
              name='cols'
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <button className='game-button' onClick={handleClick}>
            Set Grid
          </button>
        </div>
        {width < 3 || width > 40 || height < 3 || height > 40 ? (
          <p
            style={{
              position: 'absolute',
              marginTop: '5px',
              color: 'red',
              fontSize: '12px',
            }}
          >
            Grid must be between 3 and 40
          </p>
        ) : null}
      </div>
      <div className='heatmap-mode'>
        <label htmlFor='heatmap'>Heatmap Mode</label>
        <input
          type='checkbox'
          id='heatmap'
          name='heatmap'
          value={heatmapMode}
          onChange={(e) => setHeatmapMode(e.target.checked)}
        />
      </div>
      {/* <div className='heatmap-mode'>
        <label htmlFor='longerLasting'>Longer Lasting</label>
        <input
          type='checkbox'
          id='longerLasting'
          name='longerLasting'
          value={longerLasting}
          onChange={(e) => setLongerLasting(e.target.value)}
        />
      </div> */}
    </div>
  )
}
