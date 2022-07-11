import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

import { AiFillApple,AiOutlineUser,AiFillSetting,AiFillLock,AiFillHome} from 'react-icons/ai'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {IoHelpBuoySharp} from 'react-icons/io5'
import {FaSignOutAlt} from 'react-icons/fa'
import classNames from 'classnames';

const App = () => {
  const [toggle,setToggle]=useState(false)
  console.log(toggle)
  return (
    <div className="App">
      <div className={classNames([`navigation`,toggle ?'active':''])}>
        <ul>
          <li>
            <Link to="/">
              <span className='icon'>
               
                <AiFillApple/>
              </span>
              <span className='title'>Brand Name</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className='icon'>
                <AiFillHome/>
              </span>
              <span className='title'>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className='icon'>
              <AiOutlineUser/>
              </span>
              <span className='title'>Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className='icon'>
                <BsFillChatDotsFill/>
              </span>
              <span className='title'>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className='icon'>
                  <IoHelpBuoySharp/>
              </span>
              <span className='title'>Help</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className='icon'>
                  <AiFillSetting/>
              </span>
              <span className='title'>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className='icon'>
                <AiFillLock/>
              </span>
              <span className='title'>Passwords</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className='icon'>
                  <FaSignOutAlt/>
              </span>
              <span className='title'>Sign Out</span>
            </Link>
          </li>
        </ul>
        <div onClick={()=>setToggle(!toggle)} className={classNames([`toggle`,toggle ?'active':''])}></div>
      </div>
    </div>
  )
}

export default App