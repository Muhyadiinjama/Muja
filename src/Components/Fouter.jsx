import React from 'react'

function Fouter() {
  return (
    <div>
         <div class=" mt-20 bg-gray-200 text-black ">
        <div
          class=" text-center sm:flex items-center justify-between border-t  border-gray-400
        mx-[10%] mt-12 py-6"
        >
          <p>© 2025 Muhyadiin Jama. All rights reserved.</p>
          <ul class=" flex items-center gap-5 mt-4 md:items-center justify-center ">
            <li>
              <a href="https://github.com/Muhyadiinjama">
                <i class="fa-brands fa-github text-3xl"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/m_simba1/">
                <i class="fa-brands fa-instagram  text-3xl  "></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Muhyadiinsimba/">
                <i class="fa-brands fa-facebook text-3xl  "></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Fouter