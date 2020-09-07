import React from 'react'
import { Calculator } from './Components/Calculator'

export const CalculatorApp = () => {
    return (
        <div>
            <Calculator initialValue={10}></Calculator>
        </div>
    )
}
