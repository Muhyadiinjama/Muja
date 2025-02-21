import React from 'react'

function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen   text-center">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
    <a href="/" className="mt-6 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Go back Home</a>
  </div>
  )
}

export default Notfound