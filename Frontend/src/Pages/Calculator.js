import React, {useState, useEffect} from 'react'

import Card from './../components/UI/Container/FloatingCard'
import InputBox from './../components/Form/InputBox'
import NumberInput from './../components/Form/NumberInput'
import Toggle from './../components/Form/Toggle'

const Calculator = () => {
    const [StateToggle, setStateToggle] = useState(true)
    
    const UpdateStateToggle = () => {
        setStateToggle(prevValue =>
            prevValue = !prevValue
        )
    }

    return(
        <div className="flex justify-between card__container">
            <Card Sizing="w-1/2" Margin="mr-1">
                <InputBox Header={StateToggle ? 'Reflections' : 'Frequency'}>
                    <Toggle 
                        Identifier="StateToggle"
                        Update={UpdateStateToggle}
                        StateToggle={StateToggle}
                    />
                </InputBox>
                <InputBox Header="Price">
                    <NumberInput 
                        Name="Price"
                        Value="0.008"
                        Label="Set Price"
                    />
                </InputBox>
                <InputBox Header="Price">
                    <NumberInput 
                        Name="Price"
                        Value="0.008"
                        Label="Set Price"
                    />
                </InputBox>
                <InputBox Header="Price">
                    <NumberInput 
                        Name="Price"
                        Value="0.008"
                        Label="Set Price"
                    />
                </InputBox>
            </Card>
            <Card Sizing="w-1/2" Margin="ml-1">
                This is a card
            </Card>
        </div>
    )
}

export default Calculator
