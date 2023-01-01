import React from 'react'

function SkillSet() {
    const skillset = [
        {
            image:
                "/images/IMG_20191119_143744_4 (2).jpg",
            title: "Content Creator",
            description:
                "KỌ́MỌNÍWÀ Yoruba Motivation",
        },
        {
            image:
                "/images/komoniwa.jpg",
            title: "Yoruba Language Instructor",
            description:
                "Learn Yoruba Language with ease",
        },
        {
            image:
                "/images/purple.jpg",
            title: "Video Services",
            description:
                "Purple Creation",
        },
    ];
    return (
        <div>

            <div className="bg-black ">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="tracking-tight text-white text-3xl font-extrabold text-center py-4 px-12">SKILLSET</h2>
                    {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 place-items-center"> */}
                    <div className='flex flex-wrap flex-row text-center gap-x-6 gap-y-6'>
                        {
                            skillset.map((skill) => (
                                <div key={skill.title} className="group bg-[#2B0D2B]">
                                    <div className="min-h-80 aspect-w-1 w-72 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 md:w-96 lg:w-96 xl:w-96 rounded-[20%]">
                                        <img src={skill.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    {/* <div className="mt-4 flex justify-between"> */}

                                    <h3 className=" text-slate-100 text-center text-2xl mb-3">
                                        <a className=''><span aria-hidden="true" className="absolute inset-0"></span>{skill.title}</a>
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-100 text-center mb-3">{skill.description}</p>

                                    {/* <div className="text-sm font-medium text-slate-100 text-center"> */}
                                    {/* <div className="text-center text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-[#d3ad7f] active:bg-[#d3ad7f] uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 ">
                                        Explore
                                    </div> */}
                                    <button> Explore</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SkillSet