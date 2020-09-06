
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Keys } from './Keys';
import { evaluate, round } from 'mathjs'

//if the initial value is not sent the initial value is equal to 0
export const Calculator = ( {initialValue = 0} ) => {

    /*
    hook useState to control both the result and the exercise
    */
    const [exercise, setExercise] = useState({
        ex: `${initialValue}`,
        res: initialValue,
        respAct: false
    });

    //function in charge of updating the result
    /*
    1.-handle errors using the try catch
    2.-generate the result using 'evaluate' from the mathjs library, 
       since according to developer.mozilla, the use of eval is not recommended
       https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/eval
    3.-update the result state 
    */

    const handleResult = () => {
     try {  
            const result =  round(evaluate(exercise.ex),4);
            setExercise({...exercise,res:result,respAct: true});
     } catch (error) {
            alert('Error, por favor revise el ejercicio');
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


/*

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


*/

// propType, is used to designate the initialValue as a variable of type numeric
Calculator.propTypes = {
    initialValue : PropTypes.number
}

