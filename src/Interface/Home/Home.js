import React from 'react'
import Footer from '../Footer/Footer'
import About from './About'
import AboutAuthor from './AboutAuthor'
import AttemptQuiz from '../Quiz/AttemptQuiz'
import GetInTouch from '../RegistrationGetInTouch/GetInTouch'
import SkillSet from './SkillSet'
import SingAlong from './SingAlong/SingAlong'

function Home() {
    return (/* process.env.PUBLIC_URL + "/Pic/Banner.png-c (2).png" */
        <div>
            <section className="header relative items-center flex z-40">
                <img src="/images/Banner.png-d.png" alt=""
                className=' bgImg hidden md:block' 
                />


                <div className="container mx-auto items-center flex flex-wrap absolute md:top-64">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className='pt-32 sm:pt-0'>
                            <h2 className="font-semibold text-5xl text-slate-100 shadow-md md:text-7xl komoniwa">KỌ́MỌNÍWÀ</h2>
                            <p className="mt-4 text-lg leading-relaxed text-slate-100">
                                Ìwà rere l'ẹṣọ́ ènìyàn (Virtue is Man's pearl)

                                {/* . It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular. */}
                            </p>
                            <div className='mt-12'>
                                {/* <div className="get-started w-60 text-center text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-[#d3ad7f] active:bg-[#d3ad7f] uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 ">
                                    Explore
                                </div> */}

                              <button className='absolute cursor-pointer'>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src={process.env.PUBLIC_URL + "/Pic/Banner.png-c (2).png"} alt="" className='absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 hidden md:flex lg:flex' /> */}
            </section>
            <AboutAuthor />
            <SkillSet />
            {/* <SingAlong /> */}
            {/* <SingAlong /> */}
            <About />
            <AttemptQuiz />
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default Home