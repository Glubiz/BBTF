import {useState} from 'react'

import Error from './../UI/Error'

const NumberInput = (props) => {
    const [ErrorMessage, setErrorMessage] = useState(false) 

    const onChangeHandler = (e) => {
        let Value = parseFloat(e.target.value)
        if(Value < e.target.min){
            setErrorMessage("Input has to be larger than " + e.target.min)
        } else {
            ErrorMessage && setErrorMessage(prev => prev = !prev)
        }
        props.Update(Value)
    }

    return (
        <>
            <input type="number" name={props.Name} min="0" defaultValue={props.Value} id={props.Name} onChange={onChangeHandler}/>
            {ErrorMessage && <Error Message={ErrorMessage} />}
        </>
    )
}

export default NumberInput