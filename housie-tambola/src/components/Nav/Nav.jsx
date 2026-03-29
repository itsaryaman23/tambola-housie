import React, { useEffect } from 'react';
import NavStyles from './Nav.module.css';

export default function Nav({ setView, view, setResetKey }) {
    // useEffect(()=>{
    //     setView("buttons");
    // },[]);
    function handleClick(e) {
        setView(e.target.innerHTML);
    }
    const handleReset = () => {
        setResetKey();
    }

    const showRules = () => {
        setView("Rules");
    }

    return (<>
        <div>
            {view == "Back" ? (<><div className={NavStyles.containerOnHome}>
                <button className={NavStyles.btn} onClick={handleClick}>Number Caller</button>
                <button className={NavStyles.btn} onClick={handleClick}>Ticket</button>
            </div>
                <div className={NavStyles.containerNotOnHome}>
                    <button className={NavStyles.homeBtn} onClick={showRules}>Rules</button></div></>
            ) : (<div className={NavStyles.containerNotOnHome}>
                <button className={NavStyles.homeBtn} onClick={handleClick}>Back</button>
                {view == "Ticket" && (<button className={NavStyles.homeBtn} onClick={handleReset}>New Ticket</button>)}

            </div>)
            }
        </div>
    </>)
}