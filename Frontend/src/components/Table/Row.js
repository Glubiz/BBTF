import React from 'react'

const Row = (props) => {
    const createTd = (text, OneTextColor) => {
        if (typeof text === "undefined") {
            return;
        }

        if (OneTextColor) {
            return (<td style={{color:OneTextColor}}>{text}</td>);
        } else {
            return (<td>{text}</td>);
        }
    };

    return (
        <tr className={props.setClass}>
            {createTd(props.One, props.OneTextColor)}
            {createTd(props.Two, props.TwoTextColor)}
            {createTd(props.Three, props.ThreeTextColor)}
            {createTd(props.Four, props.FourTextColor)}
            {createTd(props.Five, props.FiveTextColor)}
            {props.Whole && <td colSpan="3">{props.Whole}</td>}
        </tr>
    )
}

export default Row