import React from 'react'
import { TodoContext } from './ReactContext'
function ScoreContainer() {
    const {
        score
    } = React.useContext(TodoContext)
    return (
        <div className="counter container-fluid mx-auto p-2 d-flex align-items-center">
            <div className="counter-left col">
                <p className="m-0 text-uppercase fs-1 fw-bold">rock</p>
                <p className="m-0 text-uppercase fs-1 fw-bold">paper</p>
                <p className="m-0 text-uppercase fs-1 fw-bold">scissors</p>
            </div>
            <div className="counter-right col-3 bg-white text-black d-flex flex-column text-center text-uppercase">
                <p className="counter-right-text m-0 fw-bold">score</p>
                <p className="counter-right-number m-0 fw-bold">{score}</p>
            </div>
        </div>
    )
}

export default ScoreContainer