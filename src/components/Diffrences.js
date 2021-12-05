import React from 'react'
import classes from "./Differences.module.css"

const Diffrences = () => {
    return (
        <div className={classes["differences-container"]}>
            <div className={classes.differences}>
                <h2>What makes Microtraction different</h2>
            </div>
            <div className={classes["diff-list"]}>
                <div className={classes.diff}>
                    <div className={classes.number}>
                        <img src="https://v.fastcdn.co/u/855ba8b8/15702706-0-1.png" alt="1" />
                    </div>
                    <p>Founders can apply for investment at anytime, all year round without an intro</p>
                </div>
                <div className={classes.diff}>
                    <div className={classes.number}>
                        <img src="https://v.fastcdn.co/u/855ba8b8/15702706-0-1.png" alt="1" />
                    </div>
                        <p>Founders can apply for investment at anytime, all year round without an intro</p>
                    
                </div>
                <div className={classes.diff}>
                    <div className={classes.number}>
                        <img src="https://v.fastcdn.co/u/855ba8b8/15702706-0-1.png" alt="1" />
                    </div>
                    <p>Founders can apply for investment at anytime, all year round without an intro</p>
                </div>
                <div className={classes.diff}>
                    <div className={classes.number}>
                        <img src="https://v.fastcdn.co/u/855ba8b8/15702706-0-1.png" alt="1" />
                    </div>
                    <p>Founders can apply for investment at anytime, all year round without an intro</p>
                </div>
            </div>
        </div>
    )
}

export default Diffrences
