const TextBox = (props) => {
    return(
        <div className="TextBox">
            <h3>{props.Header}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default TextBox