import React from 'react'
import logo from "../assets/logo.png"
import moon from "../assets/moon.png"
import menub from "../assets/menub.png"
import closeb from "../assets/closeb.png"

const SideMenu = document.querySelector('#sideMenu');

function openMenu(){
    SideMenu.style.transform = 'translateX(-16rem)'; 
}
function closeMenu(){
    SideMenu.style.transform = 'translateX(16rem)'; 
}

function Navbar() {
  return (
    <div>
      <div className='bg-gray-200 flex shadow-md fixed w-full z-50   px-5 lg:px-8 xl:px-[8%] py-4 justify-between items-center'>
        <div className='flex py-4 items-center'>
        <img src={logo} className='h-12' alt="" />
        <a class="font-semibold items-center" href="/">Muhyadiin jama</a>

        </div>
        <ul  class="hidden md:flex items-center gap-6 lg:gap-5 rounded-full px-13 py-3 ">
            <li><a href="/" class="text-black hover:text-[#15803d]">Home</a></li>
            <li><a href="/about" class="text-black hover:text-[#15803d] ">About</a></li>
            <li><a href="/services" class="text-black hover:text-[#15803d] ">Services</a></li>
            <li><a href="/projects" class="text-black hover:text-[#15803d] ">My project</a></li>
            <li><a href="/contact" class="text-black hover:text-[#15803d] ">Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <img src={moon} className='w-6' alt="" />
           <a href="/contact" className='hidden lg:flex items-center gap-3 py-2.5 px-10 border
           rounded-full ml-4  border-green-600 hover:bg-[#15803d] hover:text-white'>Contact</a>

           <button className='block md:hidden ml-3'onClick={openMenu} >
            <img src={menub} alt="" className='w-6'/> </button>
        </div>
        <ul id='sideMenu' class="flex md:hidden gap-4 flex-col py-20 px-10 fixed -right-64 top-0
          bottom-0 w-64 z-5- h-screen bg-gray-200 transition duration-500 dark:bg-[#1e293b]">

          <div class="absolute right-6 top-6" onClick={closeMenu}>
          <img src={closeb} alt="" className='w-5 cursor-pointer'/>
          
          </div>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="/about" onClick={closeMenu}>About</a></li>
          <li><a href="/services"  onClick={closeMenu}>Services</a></li>
          <li><a href="/project" onClick={closeMenu}>My project</a></li>
          <li><a href="/contact" onClick={closeMenu}>Contact</a></li>

   


          </ul>
      </div>
    </div>
    
  )
}

export default Navbar