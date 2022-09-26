import React, {useEffect, useCallback} from 'react'
import ReactDOM from 'react-dom';

const Table = (props) => {
    useEffect(() => {
        console.log(props)
        if(props.TableStyle === "Horizontal" && props.TableData){
            setTableData(props.TableID)
        } else if (props.TableStyle === "Vertical" && props.TableData){
            setTableDataVertical(props.TableID)
        }
    }, [props.TableID, props.TableStyle, props.TableData, props.TableDataVertical])
    
    const setTableData = (ID) => {
        var Header = (<thead><tr>{props.Headers.map((Header, i) => <th key={i} className="clickable">{Header}</th>)}</tr></thead>)

        var DataRows = (
            <tbody>{props.TableData.map((Data, i) => 
                <tr key={i}>{Data.Data.map((data, x) => 
                    <td key={x} colSpan={Data.Data.length < props.Headers.length ? parseInt(props.Headers.length / Data.Data.length) : ""}>
                        {data}
                    </td>)}
                </tr>)}
            </tbody>
        )

        ReactDOM.render(
            [Header, DataRows],
            document.getElementById(ID)
        )
    }

    const setTableDataVertical = (ID) => {
        var DataRows = (<tbody>{props.TableData.map((Data, i) => <tr key={i}>{Data.Data.map((data, x) => <td key={x} colSpan={Data.Data.length < props.Headers.length ? parseInt(props.Headers.length / Data.Data.length) : ""}>{data}</td>)}</tr>)}</tbody>)

        ReactDOM.render(
            [DataRows],
            document.getElementById(ID)
        )
    }

    return (
        <div className="">
            <table id={props.TableID}>
            </table>
        </div>
    )
}

export default Table
