import { useState, useRef, useEffect, useAudio } from "react";
import NumberGrid from "../NumberGrid/NumberGrid";
import numberListOriginal from "../../resources/numberList";
import NumberCallerStyle from "./NumberCaller1.module.css";


const NumberCaller = () => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [calledNumbers, setCalledNumbers] = useState(new Set());
    const [numberList, setNumberList] = useState(numberListOriginal);
    const [gameStatus, setGameStatus] = useState(false);
    const [gameMode, setGameMode] = useState("A");
    const [speed, setSpeed] = useState(5);
    const [controlName, setControlName] = useState("Start");
    const [prev, setPrev] = useState(null);

    const intervalIdRef = useRef(0);

    useEffect(() => {
        if (currentNumber === 0) return;
        const audio = new Audio(`/audio/${currentNumber}.mp3`);
        // const audio = new Audio(`/audio/1.mp3`);
        audio.play();
    }, [currentNumber]);

    useEffect(() => {
        if (numberList.length === 0) {
            // Because the game is ending, immediately push the very last number to the board!
            if (currentNumber !== 0 && currentNumber !== "Good Game") {
                setCalledNumbers((prevSet) => new Set([...prevSet, currentNumber]));
                setPrev(currentNumber);
            }

            setGameStatus(false);
            setControlName("Start");
            setCurrentNumber("Good Game");
            return;
        }
        if (gameMode === "M") {
            return;
        }
        if (gameStatus && gameMode === "A") {
            if (intervalIdRef.current) clearInterval(intervalIdRef.current);
            intervalIdRef.current = setInterval(() => {
                setCalledNumbers((prevSet) => new Set([...prevSet, currentNumber]));
                setPrev(currentNumber);
                nextNumber();
            }, 1000 * speed);
            return () => {
                clearInterval(intervalIdRef.current);
            };
        } else clearInterval(intervalIdRef.current);
    }, [gameStatus, speed, numberList, currentNumber]);

    const nextNumber = () => {
        const index = Math.floor(Math.random() * numberList.length);
        const number = numberList[index];

        setCurrentNumber(number);
        setNumberList((prev) => prev.filter((_, i) => i !== index));
    };

    const handleControl = (e) => {
        if (controlName === "Start") {
            setGameStatus(true);
            setControlName("Pause");
            nextNumber();
        } else if (controlName === "Pause") {
            setControlName("Resume");
            setGameStatus(false);
        } else if (controlName === "Resume") {
            setControlName("Pause");
            setGameStatus(true);
        }
    };

    const handleReset = () => {
        setGameStatus(false);
        setControlName("Start");
        setCurrentNumber(0);
        setCalledNumbers(new Set());
        setPrev(null);
        setNumberList(numberListOriginal);
    }

    const changeSpeed = (s) => {
        setSpeed(s);
    };

    const handleNext = (e) => {
        // Manually push to the board before picking the next number!
        if (currentNumber !== 0 && currentNumber !== "Good Game") {
            setCalledNumbers((prevSet) => new Set([...prevSet, currentNumber]));
            setPrev(currentNumber);
        }
        nextNumber();
    };

    return (
        <div className={NumberCallerStyle.container}>
            <div className={NumberCallerStyle.callerContainer}>
                <div className={NumberCallerStyle.modeContainer}>
                    <button
                        className={
                            NumberCallerStyle.btnMode +
                            " " +
                            NumberCallerStyle.btnLeft +
                            " " +
                            (gameMode === "M" ? NumberCallerStyle.pressed : "")
                        }
                        onClick={() => setGameMode("M")}
                    >
                        Manual
                    </button>
                    <button
                        className={
                            NumberCallerStyle.btnMode +
                            " " +
                            NumberCallerStyle.btnRight +
                            " " +
                            (gameMode === "A" ? NumberCallerStyle.pressed : "")
                        }
                        onClick={() => setGameMode("A")}
                    >
                        Auto
                    </button>
                </div>
                <div
                    className={NumberCallerStyle.speedContainer}
                    style={{ display: gameMode === "A" ? "flex" : "none" }}
                >
                    <button
                        className={
                            NumberCallerStyle.speedButton +
                            " " +
                            NumberCallerStyle.btnLeft +
                            " " +
                            (speed === 7 ? NumberCallerStyle.pressed : "")
                        }
                        onClick={() => changeSpeed(7)}
                    >
                        Slowest
                    </button>
                    <button
                        className={
                            NumberCallerStyle.speedButton +
                            " " +
                            (speed === 6 ? NumberCallerStyle.pressed : "")
                        }
                        onClick={() => changeSpeed(6)}
                    >
                        Slow
                    </button>
                    <button
                        className={
                            NumberCallerStyle.speedButton +
                            " " +
                            (speed === 5 ? NumberCallerStyle.pressed : "")
                        }
                        onClick={() => changeSpeed(5)}
                    >
                        Normal
                    </button>
                    <button
                        className={
                            NumberCallerStyle.speedButton +
                            " " +
                            (speed === 4 ? NumberCallerStyle.pressed : "")
                        }
                        onClick={() => changeSpeed(4)}
                    >
                        Fast
                    </button>
                    <button
                        className={
                            NumberCallerStyle.speedButton +
                            " " +
                            NumberCallerStyle.btnRight +
                            " " +
                            (speed === 3 ? NumberCallerStyle.pressed : "")
                        }
                        onClick={() => changeSpeed(3)}
                    >
                        Fastest
                    </button>
                </div>
                <div>
                    {currentNumber === 0 ? (
                        <button
                            className={
                                NumberCallerStyle.btnControl + " " + NumberCallerStyle.btnStart
                            }
                            onClick={handleControl}
                        >
                            Start
                        </button>
                    ) : (
                        <h1 className={NumberCallerStyle.currentNumber}>{currentNumber}</h1>
                    )}
                </div>
                <div
                    className={NumberCallerStyle.controlContainer}
                    style={{ display: currentNumber === 0 ? "none" : "inline" }}
                >
                    <button
                        className={NumberCallerStyle.btnControl}
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button
                        className={NumberCallerStyle.btnControl}
                        onClick={handleControl}
                        style={{ display: (gameMode === "M" ? "none" : "inline") }}
                    >
                        {controlName}
                    </button>
                    <button className={NumberCallerStyle.btnControl} onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
            <NumberGrid calledNumbers={calledNumbers} prev={prev} current={currentNumber} />
        </div >
    );
};
export default NumberCaller;
