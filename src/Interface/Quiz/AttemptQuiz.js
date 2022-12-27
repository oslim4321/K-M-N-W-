import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="flex flex-wrap justify-center bg-slate-700 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
                <div className="w-full text-center lg:w-8/12">
                    <p className="text-4xl text-center">
                        <span role="img" aria-label="love">😍</span>
                    </p>
                    
                    <h3 className="font-semibold text-3xl text-white">How well did you know Yoruba language?</h3>
                    {/* <h3 className="font-semibold text-3xl text-white">Attempt A Yoruba Quiz</h3> */}
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-white">Attempt my Quiz to assess yourself 🌝</p><div className="sm:block flex flex-col mt-10">
                        <Link to='/Quiz'>
                        <span className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-[#d3ad7f] active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" href="/learning-lab/tailwind-starter-kit/documentation/quick-start">Attempt</span>
                        </Link>
                        
                    </div>
                    <div className="text-center mt-16">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer