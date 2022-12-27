import React from 'react'
import { Link } from 'react-router-dom'
import './err.css'

function notFound() {
  return (
    <div>

      {/* <!-- component --> */}
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <center className="mt-24 m-auto">
          <img style={{ width: '450px' }} src="./images/404 Error with a cute animal-rafiki.svg" alt="" />
          <div className=" tracking-widest mt-4">
            <span className="text-gray-500 text-6xl block"><span>4  0  4</span></span>
            <div className="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</div>
            <div className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md mt-12"><Link to='/' >Go to Homepage</Link></div>
          </div>
        </center>
        <center className="mt-6">

        </center>
      </div>
    </div>
  )
}

export default notFound