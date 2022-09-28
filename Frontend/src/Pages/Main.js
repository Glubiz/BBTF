import React, {useEffect, useState} from 'react'

import Card from './../components/UI/Container/FloatingCard'
import Table from './../components/Table/Table'

const Dashboard = (props) => {
    const [Stats, setStats] = useState([])
    const TableRef = React.createRef()

    useEffect(() => {
        const arr = [
            {Data: ['Main']},
            {Data: ['Price', '0.001', 'xx%']},
            {Data: ['Market Cap', '1M', 'xx%']},
            {Data: ['Holders', '604.232', 'xx%']},
            {Data: ['Volume']},
            {Data: ['Buy / Sell', '1M', 'xx%']},
            {Data: ['Transfer', '1M', 'xx%']},
            {Data: ['LP']},
            {Data: ['Threshold', '1000 BNB', '']},
            {Data: ['Progress', '103 BNB', '']},
            {Data: ['Last trigger', '17/9-22', '']},
        ]
        setStats(prev => prev = arr)
    },[])

    return (
        <div className="flex justify-between card__container">
            <Card Sizing="w-full">
                <Table 
                    TableID="Stats"
                    TableRef={TableRef}
                    Headers={['', 'Stat', 'Change']}
                    TableData={Stats}
                    TableStyle="Horizontal"
                />  
            </Card>
        </div>
    )
}

export default Dashboard
