import React, { useEffect, useState } from 'react'
import './Calculator.css'

export default function Calculator() {

    //Define state to manage the display
    const[inputVal, setInputVal] = useState('');

    //function to add a value to the display
    function handleInput(e){
        setInputVal(prevInput => prevInput+e.target.innerText)
    }

    // Function to calculate and update the display
    function handleEvaluate(){
        // Use eval to calculate the expression
        setInputVal(eval(inputVal).toFixed(2));
    }

    // Function to clear the display
    function handleAC(){
        setInputVal('');
    }

    //function to handle keyboard input ie. 'Enter'
    function handleEnter(e){
        if(e.key === 'Enter')
            setInputVal(eval(inputVal).toFixed(2));
        
    }

    //function to delete single character from the input and update the display
    function handleDel(){
        setInputVal(inputVal.toString().slice(0, -1));
    }
    

  return (
    <div className="calculator">
        <section className='text'>
            <div className="input">
                <input className='input' type="text" onKeyDown={handleEnter} onChange={(e)=>setInputVal(e.target.value)} value={inputVal}/>  
            </div>
        </section>
        <section className='keyboard'>
            <div className="inputs-btn">
                <div className="btn">
                    <button className='white-btn' onClick={handleAC}>AC</button>
                </div>
                <div className="btn">
                    <button className='white-btn' onClick={handleDel}>DEL</button>
                </div>
                <div className="btn blue">
                    <button className='white-btn' onClick={handleInput}>/</button>
                </div>
                <div className="btn blue">
                    <button className='white-btn' onClick={handleInput}>*</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>7</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>8</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>9</button>
                </div>
                <div className="btn blue">
                    <button className='white-btn' onClick={handleInput}>-</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>4</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>5</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>6</button>
                </div>
                <div className="btn blue">
                    <button className='white-btn' onClick={handleInput}>+</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>1</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>2</button>
                </div>
                <div className="btn dark">
                    <button onClick={handleInput}>3</button>
                </div>
                <div className="btn blue">
                    <button className='white-btn' onClick={handleInput}>.</button>
                </div>
                <div className="btn zero dark">
                    <button onClick={handleInput}>0</button>
                </div>
                <div className="btn equal light-blue">
                    <button className='white-btn' onClick={handleEvaluate}>=</button>
                </div>
            </div>
        </section>
    </div>
  )
}
