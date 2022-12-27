import React, { useContext, useState } from "react"

const Owner = React.createContext()

const ContextApi = ({ children }) => {
    const [BrowserName, setBrowserName] = useState("Komoniwa");
    const [QuizScores, setQuizScores] = useState(9)

    return <Owner.Provider value={{
        BrowserName,
        setBrowserName,
        setQuizScores,
        QuizScores
    }}>{children}</Owner.Provider>
}

export const ContextOwner = () => {
    return useContext(Owner)
}
export { Owner, ContextApi }  