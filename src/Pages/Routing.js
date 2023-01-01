import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../Interface/Home/Home'
import Navbar from '../Interface/Navbar/Navbar'
import GetInTouch from '../Interface/RegistrationGetInTouch/GetInTouch'
import Quiz from '../Interface/Quiz/Quiz'
import QuizScores from '../Interface/Quiz/QuizScores'
import NotFound from '../Interface/404/NotFound'
import Nav from '../Interface/Navbar/Nav'
function Routing() {
    return (
        <div>
            <Router>
                {/* <Navbar /> */}
                <Nav/>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/GetInTouch' element={<GetInTouch />}></Route>
                    <Route path='/Quiz' element={<Quiz />}></Route>
                    <Route path='/QuizScores' element={<QuizScores />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </Router>

        </div>
    )
}

export default Routing