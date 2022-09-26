const Card = (props) => {
    return <div className={props.Sizing + " " + props.Margin + " card lg:p-7 md:p-5 sm:p-3 lg:mt-5 md:mt-2"}>
        {props.children}
    </div>
}

export default Card