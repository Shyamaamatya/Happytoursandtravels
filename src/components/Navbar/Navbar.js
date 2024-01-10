import React from 'react'
// import Happy from '../../Images/Happy.png'
import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrNotification } from 'react-icons/gr'
import { FaUserCircle } from 'react-icons/fa'
// import { FaInstagram } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import Dropdown from '../Dropdown/Dropdown'

const Nav = () => {
  const getInitialState = () => {
    const value = 'Dropdown'
    return value
  }

  const navigate = useNavigate()

  const [value, setValue] = useState(getInitialState)

  const [selected, setSelected] = useState('Services')

  return (
    <>
      <div className='nav'>
        <Link exact className='Link' to='/'>
          <div className='logo'>
            {/* <Link exact className="Link" to="/"> */}
            <img src='/Images/Happy.png' alt='Logo' />
            {/* </Link> */}
          </div>
        </Link>

        <ul className='nav-right'>
          <li>
            <Link exact className='Link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Dropdown selected={selected} setSelected={setSelected} />
          </li>
          <li>
            <Link exact className='Link' to='/menu'>
              {/* <GrNotification /> */}
              <IoMenu />
            </Link>
          </li>
          {/* <li>
            <Link exact className='Link' to='/user'>
              <FaUserCircle />
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default Nav
