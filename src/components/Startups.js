import React from 'react'
import classes from "./Startups.module.css"

const Startups = () => {
    return (
        <div className={classes["startup-container"]}>
            <h2>
                What we look for in startups we fund
            </h2>
            <div className={classes["startup"]}>
                <div className={classes["content"]}>
                    <p>
                        Microtraction funds smart, relentlessly resourceful founders who are building high growth, technology driven businesses in $Bn markets
                    </p>
                    <p>
                        We are sector agnostic and geographically focused on Nigeria at launch
                    </p>
                </div>
                <div className={classes["img-container"]}>
                    <img src='https://v.fastcdn.co/u/855ba8b8/15706216-0-Investment-Criteria-.png' alt="startup qualifications" />
                </div>
            </div>
        </div>
    )
}

export default Startups
