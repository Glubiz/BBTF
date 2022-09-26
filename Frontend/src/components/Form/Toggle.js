import { useEffect, useState } from 'react'

const Toggle = (props) => {
    useEffect(() => {
        document.getElementById(props.Identifier).checked = props.StateToggle
    }, [])

    const ToggleChange = (e) => {
        document.getElementById(props.Identifier).checked = !props.StateToggle
        props.Update(e.target.value)
    }

    return (
        <div className="toggle" onClick={ToggleChange}>
            <input type="checkbox" id={props.Identifier} />
            <div className="toggle__ball">

            </div>
        </div>
    )
}

export default Toggle