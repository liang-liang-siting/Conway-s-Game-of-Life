import { NavLink } from 'react-router-dom'
import './index.css'

export default function Header() {
  const LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Game', path: '/game' },
    { name: 'Credits', path: '/credits' },
  ]

  return (
    <div className='header'>
      {LINKS.map((item) => (
        <NavLink to={item.path} key={item.name} className='link'>
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}