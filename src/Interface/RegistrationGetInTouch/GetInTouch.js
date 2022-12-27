import React from 'react'

function GetInTouch() {
    return (
        <div className='mt-12'>
            <h1 className='text-5xl text-white text-center'>Get in touch with us</h1>
            <div className="flex mx-auto justify-center shadow-lg mt-10  mb-4 max-w-lg">
                <form className="w-full max-w-xl bg-gray-900 rounded-lg px-4 pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <h2 className="px-4 pt-3 pb-2 text-gray-100 text-lg">Name</h2>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <input type="text" className="bg-gray-700 rounded border border-slate-700 leading-normal w-full py-2 px-3 font-medium placeholder-gray-200 focus:outline-none focus:bg-slate-600 text-white" placeholder='name' />
                        </div>

                        <h2 className="px-4 pt-3 pb-2 text-gray-100 text-lg">Email</h2>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <input type="email" className="bg-gray-700 rounded border border-slate-700 leading-normal w-full py-2 px-3 font-medium placeholder-gray-200 focus:outline-none focus:bg-slate-600 text-white" placeholder='email' />
                        </div>

                        <h2 className="px-4 pt-3 pb-2 text-gray-100 text-lg">Add a new comment</h2>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea className="bg-gray-700 rounded border border-slate-700 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-200 focus:outline-none focus:bg-slate-600 text-white" name="body" placeholder='Type Your Comment' required></textarea>
                        </div>
                        <div className="w-full md:w-full flex items-start px-3">
                            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs md:text-sm pt-px text-slate-200">Some TEXT is okay.</p>
                            </div>
                            <div className="-mr-1">
                                <input type='submit' className="bg-gray-600 text-gray-200 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-black hover:text-slate-300" value='Post Comment' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GetInTouch