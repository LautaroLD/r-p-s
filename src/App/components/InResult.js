import React from 'react'
import { TodoContext } from './ReactContext'

function InResult() {
    const {
        userWin,
        setSeeResult,
        classElementUser,
        classElementBot
    } = React.useContext(TodoContext)
    return (
        <div className="result-section container-md w-100 mx-md-auto d-flex position-relative align-items-center" >
            <div className="user-Picked results col" >
                <h2>Yor Picked</h2>
                <div className={classElementUser} ></div>
            </div>
            <div className="col d-flex flex-column align-items-center result-btn-container">
                <p className=" text-uppercase fw-bold">
                    {userWin === true && 'you win'}
                    {userWin === false && 'you lost'}
                    {userWin === null && 'draw'}
                </p>
                <button type="button" className="btn btn-secondary" onClick={() => setSeeResult(false)}>Continue</button>
            </div>
            <div className="bot-Picked results col">
                <h2>The house Picked</h2>
                <div className={`${classElementBot} position-relative bg-white item `} ></div>

            </div>
        </div>
    )
}

export default InResult