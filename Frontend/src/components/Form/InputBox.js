const InputBox = (props) => {
    return(
        <div className="flex flex-col pb-4">
            <div className="pb-1">
                <h3>{props.Header}</h3>
            </div>
            {props.children}
        </div>
    )
}

export default InputBox