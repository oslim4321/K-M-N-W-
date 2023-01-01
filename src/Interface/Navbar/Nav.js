import React from 'react'
import { Navlinks } from './NavbarResource'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
   
    <nav className="flex items-center justify-between flex-wrap bg-black p-6 border-b border-red-400 z-50 
       fixed right-0 left-0 top-0">
    <div className="flex items-center text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">My Site</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <marquee className="text-white font-bold text-xl" scrollamount="5">
        E Kaabo si itakun agbaye Komoniwa!
        </marquee>
      </div>
      <div>
        <div className="lg:flex justify-end flex-1 items-center py-1 listing">
            {
              Navlinks.map((link) => (
                <Link key={link.id} to={link.url}><span className="flex-no-grow flex-no-shrink relative py-2 px-2 leading-normal
                                 text-white no-underline flex items-center capitalize md:px-6 unOrderList ">{link.text}</span></Link>
              ))              
            }
          </div>
          
      </div>
      <div className="text-white flex items-center ">
                   <a href="https://web.facebook.com/komoniwa1" className='mx-2'><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com/Komoniwa1"  className='mx-2'><i className="bi bi-twitter"></i></a>
                    <a href="https://www.instagram.com/komoniwa1/" className='mx-2'><i className="bi bi-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCcnvgHT8QTEdCkCe1KqOC7g " className='mx-2'><i className="bi bi-youtube"></i></a>
        </div>
        </div>
        </nav>

  )
}

export default Nav