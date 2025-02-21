import React from 'react'
import me from "../assets/me.jpg"
import codeb from "../assets/codeb.png"
import edub from "../assets/edub.png"
import projectb from "../assets/projectb.png"
import vscode from "../assets/vscode.png"
import firebase from "../assets/firebase.png"
import mongodb from "../assets/mongodb.png"
import figma from "../assets/figma.png"
import git from "../assets/git.png"

function About() {
  return (
    <div>
     <div class="bg-green-500  text-black py-40 text-center">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold">About me</h2>
      <span class="relative flex justify-center p-3">
        <div
          class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-75"></div>
        <span class="relative z-10 bg-green-500 px-6">I am delevelper and I can do this</span>
      </span>
      
    </div>
  </div >

  <div className='w-full px-[12%]  mt-10  '>
    <div class="flex w-full flex-col lg:flex-row items-center gap-20 my-20 ">
        <div class="max-w-max mx-auto relative">
            <img src={me} alt=""  className='w-64 sm:w-80 rounded-3xl max-w-none'/>
        </div>
        <div className='flex-1'>
        <p class="mb-10 max-w-2xl">I am an experienced Frontend Developer of professional 
                expertise in the field. Throughout my career, I have had the privilege of 
                collaborating with prestigious  nd growth.</p>
                <ul class="grid grid-cols-1 sm:grid-cols-3  gap-6 max-w-2xl">
                    <li class="border-[0.5px] pl-3 border-gray-400 rounded cursor-pointer hover:bg-[#fc4ff] hover:-translate-y-1 
                    duration-500 hover:shadow-[4px_4px_0_#000]">
                       <img src={codeb} alt="" className='w-7 mt-3 ' />
                        <h3 class="my-4 font-semibold ">Languages</h3>
                        <p class=" text-sm">HTML, CSS, JavaScript React Js, Next Js</p>
                    </li>
                    <li class="border-[0.5px] pl-3 border-gray-400 rounded cursor-pointer hover:bg-[#fc4ff] hover:-translate-y-1 
                    duration-500 hover:shadow-[4px_4px_0_#000]">
                        <img src={edub} alt="" className='w-7 mt-3' />
                        <h3 class="my-4 font-semibold ">Education</h3>
                        <p class=" text-sm">B.Tech in Computer Science</p>
                    </li>
                    <li class="border-[0.5px] pl-3 border-gray-400 rounded cursor-pointer hover:bg-[#fc4ff] hover:-translate-y-1 
                    duration-500 hover:shadow-[4px_4px_0_#000]">
                      <img src={projectb} alt="" className='w-5 mt-3' />
                        <h3 class="my-4 font-semibold ">project</h3>
                        <p class=" text-sm">Built more than 5 projects</p>
                    </li>
                 </ul>
                 <h4 class=" my-6  "> Tools I use</h4>
                 <ul class="flex items-center  sm: gap-5">
                    <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                      rounded-lg cursor-pointer hover:hover:-translate-y-1 duration-500 ">
                        <img src={vscode} alt=""  className='w-5 sm:w-7'/>
                    </li>
                    <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                      rounded-lg cursor-pointer hover:hover:-translate-y-1 duration-500 ">
                     <img src={firebase} alt="" className='w-5 sm:w-7'/>
                    </li>
                    <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                      rounded-lg cursor-pointer hover:hover:-translate-y-1 duration-500 ">
                      <img src={mongodb} alt="" className='w-5 sm:w-7'/>
                    </li>
                    <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                      rounded-lg cursor-pointer hover:hover:-translate-y-1 duration-500 ">
                       <img src={figma} alt="" className='w-5 sm:w-7'/>
                    </li>
                    <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                      rounded-lg cursor-pointer hover:hover:-translate-y-1 duration-500 ">
                      <img src={git} alt="" className='w-5 sm:w-7'/>
                    </li>
                 </ul>
        </div>

  </div>


 </div>
    </div>
  )
}

export default About