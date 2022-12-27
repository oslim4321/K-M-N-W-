import React from 'react'
import { ContextOwner } from '../../Context/Context'

function QuizScores() {
    const { QuizScores } = ContextOwner();
    console.log(QuizScores)
    return (
        <div className="flex justify-center items-center mt-40">
            <div className='text-white'>hello your score is{QuizScores} </div>
        </div>
    )
}

export default QuizScores