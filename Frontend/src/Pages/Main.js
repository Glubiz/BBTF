import React, {useEffect, useState} from 'react'

import Card from './../components/UI/Container/FloatingCard'
import Table from './../components/Table/Table'

const Dashboard = (props) => {
    const [Stats, setStats] = useState([])
    const TableRef = React.createRef()

    useEffect(() => {
        const arr = [
            {Data: ['Stats']},
            {Data: ['First', 'Second', 'Third']}
        ]
        setStats(prev => prev = arr)
    },[])

    return (
        <div className="flex justify-between card__container">
            <Card Sizing="w-full">
                <Table 
                    TableID="Stats"
                    TableRef={TableRef}
                    Headers={['', 'Stats', '']}
                    TableData={Stats}
                    TableStyle="Horizontal"
                />  
            </Card>
        </div>
    )
}

export default Dashboard
