import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContextOwner } from '../../Context/Context';
import QuizJson from './Quiz.json'
import { Question } from './YorubaQuestion'
// import {uuidv4} from 'uuid'

function Quiz() {
    console.log(Question)
    const { setQuizScores } = ContextOwner()
    const navigate = useNavigate()
    const [AnsState, setAnsState] = useState()
    const items = QuizJson.filter((item) => item.category === "geography");
    // console.log(items);
    const [score, setscore] = useState(0);
    const [questCount, setquestCount] = useState(0);
    const [submitButton, setsubmitButton] = useState(false)


    // const [ShowScore, setShowScore] = useState(false)

    // const [SubmitButton, setSubmitButton] = useState(false)
    // const [score, setscore] = useState(0)
    //     function NextQuest(params) {
    //         console.log(params)
    //         if (params) {
    //             setscore(score + 1)
    //         }

    //     const nextQuest = questCount + 1;
    //     if (nextQuest < items.length) {
    //         setquestCount(nextQuest)

    //     } else {
    //         setSubmitButton(true)

    //     }
    //     // refer.checked = false;

    // }


    // function submitQuiz(e) {
    //     setShowScore(true)
    //     const d = new Date();
    //     let date = d.toLocaleString();
    //     console.log(date)

    //     // dispatch(SendUSerQuizScore({ score, course, date }))
    //     e.currentTarget.disabled = true;
    // }

    let myChecked = false
    function getCheckeed(e) {
        // const { value } = e.target;
        setAnsState(e.target.dataset.doc)
    }

    function forward() {
        console.log(AnsState);
        if (AnsState === 'true') {
            setscore(score + 1);
        };
        const nextQuest = questCount + 1;
        if (nextQuest < items.length) {
            setquestCount(nextQuest)
        } else {
            /* activate the submit button when the quiz is done */
            setsubmitButton(true)
            /* I save the quiz score to context api */
            setQuizScores(score + '/' + items.length)
        }

    }
    function submitQuiz() {
        navigate('/QuizScores')
    }

    // console.log('your scores', score)
    // console.log('your number of quest', questCount + 1)


    return (
        <div className='mt-[100px]'>
            <>
                {/* submit pop */}
                {
                    submitButton ?
                        (<div className="h-screen flex items-center justify-center">
                            <button onClick={submitQuiz} className="bg-neutral-200 px-12 py-4 text-2xl border-neutral-400 border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                                Submit
                            </button>
                        </div>)

                        :
                        (<div className='mb-40'>
                            <h1 className="text-3xl font-sans mt-10 md:mt-10 lg:mt-14 font-bold text-slate-100 dark:text-gray-300 text-center">{items[questCount].question}</h1>
                            <h1 className='text-white text-center text-3xl'>{questCount + 1}/ {items.length}</h1>
                            <div className='flex justify-center mt-16'>
                                <div className='bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded-2xl min-w-30 w-[100%] md:w-[50%] '>
                                    <div className="pt-0 pb-2">
                                        {
                                            items[questCount].answers.map((ans) => {
                                                // console.log(ans)
                                                return (
                                                    /* onClick={() => NextQuest(ans.correct)} */
                                                    <div key={ans.answer} className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-2 rounded-md flex items-center md:mb-4">
                                                        <input onClick={getCheckeed} type="radio" className='ml-5 dark:bg-gray-800 mx-3' name='size' value={ans.answer} data-doc={ans.correct} />
                                                        <label htmlFor="" className='text-gray-700 dark:text-gray-400 text-lg ml-4"'>{ans.answer}</label>
                                                    </div>
                                                )

                                            })
                                        }
                                        <div className="flex justify-center item-center gap-x-5">
                                            <div className="btn btn-success"><i className="bi bi-arrow-left-circle-fill text-3xl md:text-5xl"></i></div>
                                            <div onClick={forward} className="btn btn-success"><i className="bi bi-arrow-right-circle-fill text-3xl md:text-5xl"></i></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </>
        </div>
    )
}

export default Quiz