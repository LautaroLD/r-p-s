import React from "react";
const TodoContext = React.createContext();

function TodoProvider(props) {
    const [seeResult, setSeeResult] = React.useState(false)
    const [userWin, setUserWin] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [classElementUser, setClassElementUser] = React.useState('')
    const [classElementBot, setClassElementBot] = React.useState('')
    const botOptions = [
        'rock',
        'scissors',
        'paper'
    ]

    const botInit = () => {
        let cosa = botOptions[Math.floor(Math.random() * (3 - 0)) + 0]
        if (cosa === 'rock') {
            setClassElementBot('item-rock')
        }
        if (cosa === 'paper') {
            setClassElementBot('item-paper')
        }
        if (cosa === 'scissors') {
            setClassElementBot('item-scissor')
        }

        console.log(cosa)
        return cosa
    }
    const compareSelection = (userInit) => {
        setClassElementUser(window.event.target.className)
        let botNumber = botInit()
        let userNumber = userInit
        if (botNumber === userNumber) {
            setUserWin(null)
        } else if ((userNumber === 'rock' && botNumber === 'paper') ||
            (userNumber === 'paper' && botNumber === 'scissors') ||
            (userNumber === 'scissors' && botNumber === 'rock')) {
            setUserWin(false)
            setScore(score - 1)
        } else if ((userNumber === 'rock' && botNumber === 'scissors') ||
            (userNumber === 'paper' && botNumber === 'rock') ||
            (userNumber === 'scissors' && botNumber === 'paper')) {
            setUserWin(true)
            setScore(score + 1)
        }
        setSeeResult(true)


    }
    return (
        <TodoContext.Provider value={{
            compareSelection,
            seeResult,
            setSeeResult,
            userWin,
            score,
            classElementUser,
            classElementBot
        }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };