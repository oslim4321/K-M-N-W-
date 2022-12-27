import React from 'react'

function About() {
    const posts = [
        {/* {process.env.PUBLIC_URL + "/Pic/Banner.png-c (2).png"} */
            title: "CSS Components",
            description:
                "Tailwind Starter Kit comes with a huge number of Fully Coded CSS components",
        },
        {
            title: "Pages",
            description:
                "This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.",
        },
        {
            title: "JavaScript Components",
            description:
                "We also feature many dynamic components for React, Vue and",
        },
        {
            title: "Documentation",
            description:
                "Built by developers for developers. You will love how easy is to to work",
        },
    ];

    return (
        <section className='mt-40 pb-40 relative bg-black'>
            <div className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute'>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon className="text-slate-100 fill-current" points="2560 0 2560 100 0 100"></polygon></svg>
            </div>
            <div className=''>
                <div className='flex flex-wrap items-center'>
                    {/* one card */}
                    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-1 md:px-4 mr-auto ml-auto -mt-32">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                            <img alt="..." src={process.env.PUBLIC_URL + "/Pic/Banner.png-c (2).png"} className="w-full align-middle rounded-t-lg" />
                            <blockquote className="relative p-8 mb-4">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block" style={{ height: "95px", top: "-94px" }}><polygon points="-30,95 583,95 583,65" className="text-pink-600 fill-current"></polygon></svg>
                                <h4 className="text-xl font-bold text-white">Great for your awesome project</h4>
                                <p className="text-md font-light mt-2 text-white">Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.</p>
                            </blockquote>
                        </div>
                    </div>
                    {/* other contant */}
                    <div className="w-full md:w-6/12 mb-22 mb-20 mb:px-4">
                        <div className="flex flex-wrap">
                            {
                                posts.map((post) => (
                                    <div key={post.title} className="w-full md:w-6/12 px-3">
                                        <div className="relative flex flex-col mt-4">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                    <i className="fas fa-sitemap"></i>
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold text-slate-100">{post.title}</h6>
                                                <p className="mb-4 text-slate-200">{post.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About