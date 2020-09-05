import React from 'react'

export const Keys = ({setExercise}) => {

/*
used to decrease the identical code of the buttons, the return is traversed
the lists using the .map and creating the buttons
*/
    
const keySimbol = [1,2,3,4,5,6,7,8,9,0,'.'];
const keyNumeric = ['+','-','*','/'];

/*
function applied to all buttons with the exception of the AC and = to update the status of the exercise:
1.-take button value

2.-use the property of the setState (setExercise) that fetches the current value of the state 

3.-valid, if the current exercise is '0' and the new value is '.' to add the
new value to exercise, if not '.' replace 0 with the new number

4.-copy the previous values ​​of the state and replace the value of the exercise, with the new value
*/

const handleSimbolNumber = (e) => {
    const value = e.target.value;
    setExercise(last => {
        let lastEx = (last.ex === '0' && value !== '.') ? '' : last.ex;
        return ({...last,ex:`${lastEx + value}`}) 
    });
};

//returns the state values ​​to 0
const handleReset = () => {
    setExercise({ex: '0',res: 0});
};

    return (
                <>
                <div className="col-sm-12">
                    <div className="row">
                        {
                           keyNumeric.map((simb,index) =>(
                            <div key={index.toString()} className="col-sm-3 contButton">
                                <button  type="button" className="btn btn-outline-dark" onClick={handleSimbolNumber} value={simb}>{simb}</button>
                            </div>
                           )) 
                        }
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        {
                           keySimbol.map((numb,index) =>(
                            <div key={index.toString()} className="col-sm-4 contButton">
                                <button type="button" className="btn btn-outline-dark" onClick={handleSimbolNumber}  value={numb}>{numb}</button>
                            </div>
                           )) 
                        }
                        <div className="col-sm-4 contButton">
                            <button type="button" className="btn btn-danger" onClick={handleReset}>AC</button>
                        </div>

                    </div>
                </div>
                </>
    )
};
