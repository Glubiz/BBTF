const NumberInput = (props) => {
    return (
        <>
            <input type="number" name={props.Name} defaultValue={props.Value} id={props.Name}/>
        </>
    )
}

export default NumberInput