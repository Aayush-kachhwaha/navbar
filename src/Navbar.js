import React from 'react'
import MenuItems from './Menu'

function Navbar() {
  return (
    <nav className='navbarItom'>
        <h1 className='navbar-logo'>React</h1>
        <div className='menuicon'>
            
        </div>
        <ul>
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
   
    </nav>
  
  )
}

export default Navbar