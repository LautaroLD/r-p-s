import React from 'react'

function RulesModal() {
    const toggleModal = () => {
        const modal = document.getElementById('myModal')
        modal.classList.toggle('modalOpen')
    }
    return (
        <div className="rules-section w-100 d-flex justify-content-center">
            <button type="button" className="btn btn-outline-secondary px-4" onClick={toggleModal} >
                Rules
            </button>
            <div className="modal" id="myModal" >
                <button type="button" className="btn-close" onClick={toggleModal} ></button>
            </div>

        </div>
    )
}

export default RulesModal