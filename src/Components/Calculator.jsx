
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Keys } from './Keys';

//if the initial value is not sent the initial value is equal to 0
export const Calculator = ( {initialValue = 0} ) => {

    /*
    hook useState to control both the result and the exercise
    */
    const [exercise, setExercise] = useState({
        ex: `${initialValue}`,
        res: initialValue
    });

    //function in charge of updating the result
    /*
    1.-handle errors using the try catch
    2.-generates the result taking the value of the exercise saved in the state object,
       using a new Function, it could also have been done with an eval () but according to: 
       https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/eval
       "executes the code which is passed with the privileges of the caller.
       If you run eval () with a string of characters that could be affected
       by a malicious element, you could end up executing malicious code
       within the user's computer with the permissions of its page or web extension."
    3.-update the result state 
    */

    const handleResult = () => {
     try {          
            const result =  new Function('return ' + exercise.ex)();
            setExercise({...exercise,res:result});
     } catch (error) {
            alert('Error, por favor revise el ejercicio')
     }
    }


    return (
        <div className="container calculator-container">
            <div className="col-md-6 calculatorBase mx-auto">
                <br/>
                
                <div className="resultCalculator">
                    <h5>{exercise.ex}</h5>
                        <hr/>
                    <h3>{exercise.res}</h3>
                </div>
                
                <div className="numberCalculator">
                    <div className="row">
                        <Keys setExercise={setExercise}></Keys>

                        <div className="col-sm-3 resultDiv">  
                            <div className="divBtnResult bg-primary text-white" onClick={handleResult}>
                               <h1>=</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <br/>
            </div>
        </div>
    )
}

// propType, is used to designate the initialValue as a variable of type numeric
Calculator.propTypes = {
    initialValue : PropTypes.number
}

