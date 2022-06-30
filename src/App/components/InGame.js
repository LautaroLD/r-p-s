import React from 'react'
import { TodoContext } from './ReactContext';
function InGame() {
    const {
        compareSelection
    } = React.useContext(TodoContext);
    return (
        <div className="game-section container-md w-100 mx-md-auto d-flex position-relative" >
            <div onClick={() => compareSelection('paper')} className=" position-relative bg-white item item-paper" ></div>
            <div onClick={() => compareSelection('rock')} className=" position-relative bg-white item item-rock" ></div>
            <div onClick={() => compareSelection('scissors')} className=" position-relative bg-white item item-scissor" ></div>
        </div>
    )
}

export default InGame