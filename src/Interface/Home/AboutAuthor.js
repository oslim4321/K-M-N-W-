import React, { useState } from 'react'

function AboutAuthor() {
    const [about, setabout] = useState(false)
    const aboutKomoniwa = [
        'Kọ́ - Teach',
        'Ọmọ - Children (interpretes to "People" in this instance)',
        'Ìwà - Behavior/Virtue'

    ];
    //     const mystyle = {
    //         transform: scale(1) perspective(1040px) rotateY(- 11deg) rotateX(2deg) rotate(2deg)
    // };
    return (
        <div>
            <div className="container mx-auto">
            <h1 className="text-4xl text-white text-center uppercase my-10 font-semibold text-[#d3ad7f]">About</h1>
                <div className="items-center flex flex-wrap ">
                    {/* image */}
                    <div className="w-full md:w-7/12 mr-auto px-4 pt-24 md:pt-0 mb-16">
                        <img alt="..." className="max-w-full shadow-xl rounded-2xl" src={process.env.PUBLIC_URL + "/images/Web-thumb (2).jpg"}
                            style={{ transform: `scale(1) perspective(1040px) rotateY(- 11deg) rotateX(2deg) rotate(2deg)` }}
                        />
                    </div>

                    <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                        <div className="md:pr-12">
                
                            {/* <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i class="bi bi-file-earmark-person-fill text-3xl"></i>
                            </div> */}
                            <h3 className="text-3xl font-semibold text-slate-100">Who is KỌ́MỌNÍWÀ ?</h3>
                            <p className="mt-4 text-lg leading-relaxed text-slate-100">The term KỌ́MỌNÍWÀ is a yoruba word which implies "He who instills virtue". It is coined from three individual words;</p>
                            <ul className="list-none mt-6">
                                {
                                    aboutKomoniwa.map((about) => (
                                        <li key={about} className="">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-[#d3ad7f] mr-3">
                                                        <i className="fas fa-fingerprint">
                                                        </i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-400">{about}</h4>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="mt-4 leading-relaxed text-slate-300 text-center">The blend-up of the three individual words above resulted in the parent word "KỌ́MỌNÍWÀ".</div>
                            {/* <i onClick={() => setabout(!about)} className="bi bi-eyeglasses text-[#d3ad7f] text-2xl cursor-pointer"></i> */}
                             <p className="mt-4 leading-relaxed text-slate-300">Kọ́mọníwà (He who teaches good behaviour) is one of the most intriguing Yorùbá Creative whose motive towards being a Content Creator doing Yorùbá Motivations as a form of Art is to fuel a society which is morally upright, Inspired/motivated, and reflects a true definition of Humanity. Putting forward his Indigenous Language as the articulate means to dispense the goals so that they can fall in line with preserving our Language and Culture as Yorubas.</p>
                              

                            <p className='mt-5 leading-relaxed text-slate-100'>My name is KỌ́MỌNÍWÀ and it's my pleasure having you around!</p>
                            {/* <div className=" text-center text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-[#d3ad7f]
                             active:bg-[#d3ad7f] uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 mt-10">
                                Know More
                            </div> */}
                            <button>Know More</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
/*  */
export default AboutAuthor