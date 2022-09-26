import React from 'react'

const Loader = (props) => {
    return (
        <div className="loading">
            <div className="loading_spinner">
                <div className="loading_text">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Loader
