const InputBox = (props) => {
    return(
        <div className="flex flex-col pb-4">
            <div className="pb-1">
                <h4>{props.Header}</h4>
            </div>
            {props.children}
        </div>
    )
}

export default InputBox