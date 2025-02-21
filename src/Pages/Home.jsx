import React from 'react'



function Home() {
  return (
    
    <div>
        <section class="min-h-screen flex flex-col justify-center items-center text-center  py-5 ">
    <h1 class="text-3xl md:text-4xl font-bold ">Become a Software Engineer</h1>
    <p class="mt-6 text-lg ">Hey, I'm Muhyadiin <span class="wave">👋</span></p>
    <p class="text-lg ">I want to make a tech career possible for anyone.</p>
    <div class="mt-8 space-x-4">
      <a href="/projects" class="bg-green-600 text-white px-6 py-3 rounded hover:bg-[#15803d]">Get Started</a>
      <a href="/contact" class=" border border-green-600  dark:text-black hover:text-white px-6 py-3 rounded hover:bg-[#15803d]">Contact</a>
    </div>
  </section>
    </div>
  )
}

export default Home