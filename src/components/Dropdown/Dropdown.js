import React from 'react'
import './style.css'
import { FaAngleDown } from 'react-icons/fa'
import { useState } from 'react'
// import { navigate } from 'react-router-dom'

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false)
  const options = ['Nepal', 'Canada', 'Australia']

  return (
    <>
      <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
          Services
          <span>
            <FaAngleDown />
          </span>
        </div>
        {/* <span className='fas fa-caret-down'></span> */}
        {isActive && (
          <div className='dropdown-content'>
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option)
                  setIsActive(false)
                  // navigate(e?.target?.value)
                }}
                className='dropdown-item'
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Dropdown
