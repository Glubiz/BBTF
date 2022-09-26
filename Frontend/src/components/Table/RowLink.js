import React from 'react'

const RowLink = (props) => {
    const createTd = (text, link) => {
        if (typeof text === "undefined") {
            return;
        }

        if (link) {
            return (<td><a href={link} target="_blank" rel="noreferrer">{text}</a></td>);
        } else {
            return (<td>{text}</td>);
        }
    };

    return (
        <tr key={props.Header} className={props.SetClass}>
            {createTd(props.One, props.OneLink ?? props.Link)}
            {createTd(props.Two, props.TwoLink ?? props.Link)}
            {createTd(props.Three, props.ThreeLink ?? props.Link)}
            {createTd(props.Four, props.FourLink ?? props.Link)}
            {createTd(props.Five, props.FiveLink ?? props.Link)}
            {props.Custom && <td colSpan={props.ColWidth}>{props.Custom}</td>}
        </tr>
    )
}

export default RowLink