import React from 'react'

function SkillSet() {
    const posts = [
        {/* {process.env.PUBLIC_URL + "/Pic/Banner.png-c (2).png"} */
            image:
                "/images/ABD Cartoon.00_00_57_07.Still004.jpg",
            title: "Yoruba Alphabet",
            description:
                "Learn the Alphabets of the Yoruba language with ease and fun.",
        },
        {
            image:
                "/images/Onka Ede Yoruba.00_01_28_08.Still002.jpg",
            title: "Yoruba Numbers",
            description:
                `"1-10" in yoruba language just got easy and fun to learn.`,
        },
        {
            image:
                "/images/komoniwa.jpg",
            title: "Days of the Week",
            description:
                "Week days in Yoruba.",
        },
        // {
        //     image:
        //         "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
        //     title: "Creating the Perfect Espresso Recipe",
        //     description:
        //         "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
        // },
    ];
    return (
        <>
            <h1 className='text-center text-3xl font-extrabold text-white'>YORUBA SING-ALONGS</h1>
            {/* <div className="flex items-center justify-center"> */}
            <div className="grid grid-flow-row content-center text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 gap-x-6">
                {
                    posts.map((elem) => (
                        <div
                            key={elem.title}
                            className="relative my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-black dark:bg-gray-800 border border-slate-200 duration-300 hover:-translate-y-1 overflow-hidden"
                            x-for="(post, index) in posts">
                            {/* <!-- Clickable Area --> */}
                            <span _href="link" className="cursor-pointer">
                                <figure>
                                    {/* <!-- Image --> */}
                                    <img
                                        alt='ok'
                                        src={elem.image}
                                        className="rounded-t h-72 w-full object-cover
                                        hover:scale-100 translate-x-4 skew-y-3 md:transform-none
                                            "
                                    /* scale-75 translate-x-4 skew-y-3 md:transform-none */
                                    /* hover:scale-125 */
                                    />

                                    <figcaption className="p-4">
                                        {/* <!-- Title --> */}
                                        <p
                                            className="text-lg mb-4 font-bold leading-relaxed text-gray-300 dark:text-gray-300"
                                            x-text="post.title">
                                            {elem.title}
                                        </p>

                                        {/* <!-- Description --> */}
                                        <small
                                            className="leading-5 text-gray-100 dark:text-gray-400 "
                                            x-text="post.description">
                                            {elem.description}
                                        </small>
                                    </figcaption>
                                </figure>
                            </span>
                            <div className='my-[70px]'></div>
                            <div className="flex justify-center items-center">
                                <div className='flex item-center justify-center absolute bottom bottom-0'>
                                    <div className="w-40 text-center text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-[#d3ad7f] active:bg-[#d3ad7f] uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 md:hover:w-[300px] lg:hover:w-[300px] md:60 lg:60 xl:60">
                                        Order Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            {/* </div> */}
        </>
    )
}

export default SkillSet