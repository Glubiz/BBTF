import React, {useEffect, useCallback} from 'react'
import ReactDOM from 'react-dom';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const TableLink = (props) => {
    useEffect(() => {
        console.log(props)
        if(props.TableStyle === "Horizontal"){
            setTableDataLink(props.TableID)
        } else if (props.TableStyle === "Vertical"){
            setTableDataVerticalLink(props.TableID)
        }
    }, [props.TableID, props.TableStyle, props.TableData, props.TableDataVertical])

    const setTableDataLink = (ID) => {
        var Header = (<thead><tr>{props.Headers.map((Header, i) => <th key={i} className="clickable">{Header}</th>)}</tr></thead>)


        var DataRows = (<tbody>{props.TableData.map((Data, i) => <tr key={i} className={Data.Style}>{Data.Data.map((data, x) => <td key={x} colSpan={Data.Data.length < props.Headers.length ? parseInt(props.Headers.length / Data.Data.length) : ""}><a href={Data.Link} target={Data.NewPage && "_blank"} rel="noreferrer">{data}</a></td>)}</tr>)}</tbody>)

        ReactDOM.render(
            [Header, DataRows],
            document.getElementById(ID)
        )
    }

    const setTableDataVerticalLink = (ID) => {
        var DataRows = (<tbody>{props.TableData.map((Data, i) => <tr key={i} >{Data.Data.map((data, x) => <td key={x} colSpan={Data.Data.length < props.Headers.length ? parseInt(props.Headers.length / Data.Data.length) : ""}><a href={Data.Link} target={Data.NewPage && "_blank"} rel="noreferrer">{data}</a></td>)}</tr>)}</tbody>)

        ReactDOM.render(
            [DataRows],
            document.getElementById(ID)
        )
    }

    return (
        <div className="border-radius overflow-hidden shadow">
            <table className="NewTable" id={props.TableID}>
            </table>
        </div>
    )
}

export default TableLink
