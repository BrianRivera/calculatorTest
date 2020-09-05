import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { Keys } from './Keys';

export const Calculator = ( {initialValue = 0} ) => {

    
    //developer.mozilla 

    return (
        <div className="container login-container">
            <div className="col-md-6 calculorBase mx-auto">
                <br/>
                <div className="resultCalculator">
                    <h5>{initialValue}</h5>
                    <hr/>
                    <h3>{initialValue}</h3>
                </div>
                <div className="numberCalculator">
                    <Keys></Keys>
                </div>
                <br/>
            </div>
    </div>
    )
}

Calculator.propTypes = {
    initialValue : PropTypes.number
}

