import React, { useState, useEffect } from 'react';
import NumberCallerStyle from './NumberCaller.module.css';
import numberList from '../../resources/numberList';

export default function NumberCaller() {
    const [speed, setSpeed] = useState(5);
    const [startText, setStartText] = useState('Start');
    const [currentNumber, setCurrentNumber] = useState(0);
    const numberListCopy = [...numberList];
    const numberHistory = [];
    const cap = 0;
    let intervalId;
    console.log(speed);

    function getNextNumber() {
        let randomNumber = Math.floor(Math.random() * numberListCopy.length);
        numberHistory.push(numberListCopy[randomNumber]);
        numberListCopy.splice(randomNumber, 1);
        return numberHistory[numberHistory.length - 1];
    }
    function handleStart() {
        if (numberListCopy.length > 0) {

            setCurrentNumber(getNextNumber());
            if (intervalId)
                clearInterval(intervalId);
            intervalId = setInterval(() => {

                setCurrentNumber(getNextNumber());

            }, speed * 1000);
        }
        else {
            setCurrentNumber("Good Game!! Play again");
        }
    }

    function handleRestart() {
        clearInterval(intervalId);
    }

    function adjustSpeed(e) {
        setSpeed(e.target.innerHTML);
    }

    function handleClick(e) {
        const ch = e.target.innerHTML;
        switch (ch) {
            case "Start": setStartText("Pause"); handleStart(); break;
            case "Pause": setStartText("Resume"); break;
            case "Restart": setStartText("Start"); break;
            case "Resume": setStartText("Pause"); break;
        }
    }

    useEffect(() => {
        handleStart();
    }, [speed])

    return (<>
        <h1>{(currentNumber == 0 ? ' ' : currentNumber)}</h1>
        <button className={NumberCallerStyle.btnSpeed + " " + (speed == 3 && NumberCallerStyle.pressed)} onClick={adjustSpeed}>3</button>
        <button className={NumberCallerStyle.btnSpeed + " " + (speed == 4 && NumberCallerStyle.pressed)} onClick={adjustSpeed}>4</button>
        <button className={NumberCallerStyle.btnSpeed + " " + (speed == 5 && NumberCallerStyle.pressed)} onClick={adjustSpeed}>5</button>
        <button className={NumberCallerStyle.btnSpeed + " " + (speed == 6 && NumberCallerStyle.pressed)} onClick={adjustSpeed}>6</button>
        <button className={NumberCallerStyle.btnSpeed + " " + (speed == 7 && NumberCallerStyle.pressed)} onClick={adjustSpeed}>7</button>

        <br />
        <button className={NumberCallerStyle.btnControl} onClick={handleClick}>{startText}</button>
        <button className={NumberCallerStyle.btnControl} onClick={handleClick}>Restart</button>

    </>)
}