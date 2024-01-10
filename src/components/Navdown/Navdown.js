import React from 'react'
// import Happy from '../../Images/Happy.png'
import './style.css'
import { Link } from 'react-router-dom'
import { GrNotification } from 'react-icons/gr'
import { FaUserCircle } from 'react-icons/fa'
// import { FaInstagram } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'

import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Check from '@mui/icons-material/Check'

// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'

const Nav = () => {
  // const options = ['one', 'two', 'three']
  // const defaultOption = options[0]
  // const { onSelect } = this.props

  return (
    <>
      <div className='navdown'>
        <ul className='navdown-right'>
          <li>
            {/* <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder='Select an option'
          />
          ; */}
            <Link exact className='Link' to='/Nepal'>
              Nepal
            </Link>
          </li>
          <li>
            <Link exact className='Link' to='/services'>
              Australia
            </Link>
          </li>
          <li>
            <Link exact className='Link' to='/instagram'>
              {/* <GrNotification /> */}
              Europe
            </Link>
          </li>
          <li>
            <Link exact className='Link' to='/user'>
              Japan
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
