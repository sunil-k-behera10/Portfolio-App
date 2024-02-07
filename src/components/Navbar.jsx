import React from 'react'
import { FaAtlassian } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Link} from 'react-router-dom';


function Navbar() {
  return (
   <nav className='flex justify-between items-center text-center h-20 text-2xl'>
    <div className='flex items-center pl-5 gap-2'>
        < FaAtlassian className='text-sky-400 font-bold'/>
        <h1 className='font-bold text-4xl'>Ascribe</h1>
    </div>
    
    <ul className='flex justify-between gap-6 text-center font-normal text-[18px]'>
          <NavLink  to= '/'>Home</NavLink>
          <NavLink  to= '/about'>About</NavLink>
          <NavLink  to= '/portfolio'>Portfolio</NavLink>
          <NavLink  to= '/services'>Services</NavLink>
    </ul>

    <ul className='flex justify-between gap-3 px-10 font-normal text-[18px]'>
          <Link className= 'bg-indigo-700 w-[90px] text-white'>Login</Link>
          <Link className= 'bg-green-600 w-[90px]  text-white'>Signup</Link>
         
    </ul>

   </nav>
  )
}

export default Navbar