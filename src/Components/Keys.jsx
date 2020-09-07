import React, { memo } from 'react'
//using memo for eviting the refresh of the component
export const Keys = memo(({setExercise}) => {

/*
used to decrease the identical code of the buttons, the return is traversed
the lists using the .map and creating the buttons
*/
    
const keyNumeric = [1,2,3,4,5,6,7,8,9,0,'.'];
const keySymbol = ['+','-','*','/'];

/*
function applied to all buttons with the exception of the AC and = to update the status of the exercise:
1.-take button value

2.-use the property of the setState (setExercise) that fetches the current value of the state 

3.-validates if the last digit of the exercise and the value of the button 
are mathematical symbols, if they are, replace the last digit with the new value

4.-valid if the current exercise is '0' and the new value is '.' or some symbol of mathematical operation to add the
new courage to exercise, if not '.' replace 0 with the new number

5.-copy the previous values ​​of the state and replace the value of the exercise, with the new value
*/

const handleSymbolNumber = (e) => {
    const value = e.target.value;

    setExercise(last => {
        
        (keySymbol.includes(last.ex.substr(-1)) && keySymbol.includes(value)) 
        && (last.ex = last.ex.slice(0, -1));

        const lastEx = (last.ex === '0' && value !== '.' ) ? 
        (keySymbol.includes(value))? last.ex : '' 
        : last.ex;

        return ({...last,ex:`${lastEx + value}`,respAct: false}); 
        
    });
};

//or clears the last digit entered depending on the status of the answer 
const handleReset = () => {
    setExercise(last =>{
        const last1 = (last.ex.length>1)? (last.ex.slice(0, -1)): '0';

        return (last.respAct)?
        ({ex: '0',res: 0, respAct: false}):
        ({...last,ex: last1});
    });
};

    return (
            <>
            <div className="col-sm-12">
                <div className="row">
                    {
                       keySymbol.map((simb,index) =>(
                        <div key={index.toString()} className="col-sm-3 contButton">
                            <button  type="button" className="btn" onClick={handleSymbolNumber} value={simb}>{simb}</button>
                        </div>
                       )) 
                    }
                </div>
            </div>
            <div className="col-sm-9">
                <div className="row">
                    {
                       keyNumeric.map((numb,index) =>(
                        <div key={index.toString()} className="col-sm-4 contButton">
                            <button type="button" className="btn" onClick={handleSymbolNumber}  value={numb}>{numb}</button>
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
});
