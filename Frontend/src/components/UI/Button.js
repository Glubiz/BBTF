const Button = (props) => {
    return(
        <a 
        className="rounded bg-emerald-300 hover:bg-emerald-700 hover:text-white px-12 py-5 mx-12" 
        href={props.ButtonText} 
        target={props.Target} 
        rel="noreferrer"
        >
            {props.ButtonText}
        </a>
    )
}

export default Button
