import React from 'react'
import classes from "./Differences.module.css"
import Button from "./Button"

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
                        <img src="https://v.fastcdn.co/u/855ba8b8/15702716-0-2.png" alt="1" />
                    </div>
                    <p>Our investors are Venture Capitalists and Angels on the look out for great startups</p>
                    
                </div>
                <div className={classes.diff}>
                    <div className={classes.number}>
                        <img src="https://v.fastcdn.co/u/855ba8b8/15702701-0-3.png" alt="1" />
                    </div>
                    <p>Our startups have a direct line to capital to scale from Seed to Series A and beyond</p>
                </div>
                <div className={classes.diff}>
                    <div className={classes.number}>
                        <img src="https://v.fastcdn.co/u/855ba8b8/15702711-0-4.png" alt="1" />
                    </div>
                    <p>Our network gives access to companies that would otherwise be hard to reach</p>
                </div>
            </div>
            <Button href="https://tripetto.app/run/U0JMGQLYE8"  text="Apply for funding" />
        </div>
    )
}

export default Diffrences
