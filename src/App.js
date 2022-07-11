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
  const [active,setActive] = useState(null)
  console.log(toggle)

  const nav =[
    {title:'Brand Name',component:<AiFillApple/>},
    {title:'Dashboard',component:<AiFillHome/>},
    {title:'Customers',component:<AiOutlineUser/>},
    {title:'Messages',component:<BsFillChatDotsFill/>},
    {title:'Help',component:<IoHelpBuoySharp/>},
    {title:'Settings',component:<AiFillSetting/>},
    {title:'Passwords',component:<AiFillLock/>},
    {title:'Sign Out',component:<FaSignOutAlt/>},
  ]

  return (
    <div className="App">
      <div className={classNames([`navigation`,toggle ?'active':''])}>
        <ul>
          {nav.map((el,i)=>(
          <li key={i} onClick={()=>setActive(i)} className={active===i ? 'active' : ''}>
            <Link to="/">
              <span className='icon'>
               
                {el.component}
              </span>
              <span className='title'>{el.title}</span>
            </Link>
          </li>
          ))}
         
        </ul>
        <div onClick={()=>setToggle(!toggle)} className={classNames([`toggle`,toggle ?'active':''])}></div>
      </div>
    </div>
  )
}

export default App