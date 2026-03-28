import React, { useEffect } from 'react';
import NavStyles from './Nav.module.css';

export default function Nav({ setView, view }) {
    // useEffect(()=>{
    //     setView("buttons");
    // },[]);
    function handleClick(e) {
        setView(e.target.innerHTML);
    }

    return (<>
        <div className={NavStyles.container}>
            <h1>TAMBOLA HOUSIE</h1>
            {view == "Home" ? (<div className={NavStyles.btnContainer}>
                <button className={NavStyles.btn} onClick={handleClick}>Number Caller</button>
                <button className={NavStyles.btn} onClick={handleClick}>Ticket</button>
            </div>) : (<button className={NavStyles.btn + " " + NavStyles.homeBtn} onClick={handleClick}>Home</button>)
            }
        </div>
    </>)
}