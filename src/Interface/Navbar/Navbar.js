import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navlinks } from './NavbarResource';

function Navbar() {
    // const style = {
    //     color: 'red',
    //     borderBottom: '.1rem solid var(--main-color)',
    //     paddingBottom: '.5rem'

    // }
    const [hamburgerState, sethamburgerState] = useState(false)
    return (
        <div>
            <nav className="fixed top-0 shadown-lg select-none bg-grey lg:flex lg:items-stretch w-full bg-black z-50 py-4">
                <div className="flex flex-no-shrink items-stretch h-12">
                    <div className="flex items-center justify-between">
                        <div className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark text-2xl">Komoniwa</div>
                    </div>

                    <button className="lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4 flex items-center">
                        {!hamburgerState && <i className="bi bi-list text-white text-2xl" onClick={() => sethamburgerState(true)}></i>}
                        {hamburgerState && <i className="bi bi-x text-white text-2xl" onClick={() => sethamburgerState(false)}></i>}
                    </button>
                </div>

                <div className={`lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ${hamburgerState ? 'block' : 'hidden'}`}>
                    <div onClick={() => sethamburgerState(false)} className="lg:flex lg:items-center lg:justify-end ml-auto listing">
                        {
                            Navlinks.map((link) => (
                                <Link key={link.id} to={link.url}><span className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal
                                 text-white no-underline flex items-center capitalize unOrderList ">{link.text}</span></Link>
                            ))
                        }
                    </div>
                </div>
            </nav>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores deserunt odit cum officia rerum sint iure obcaecati? Odio, rerum?</p>
            {/* BAck to top  */}
            <div className='absolute bottom-0'>
                <button id="topButton"
                    className="fixed z-10 hidden p-3 bg-gray-100 rounded-full shadow-md bottom-10 right-10 animate-bounce">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar