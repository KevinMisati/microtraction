import React from 'react'
import classes from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={classes["banner-container"]}>
            <div className={classes["banner"]}>
            <div className={classes["content"]}>
                <div className={classes["logo-container"]}>
                    <img src='https://v.fastcdn.co/u/855ba8b8/38870581-0-microtraction-newp.png' alt="logo"/>
                </div>
                <h1>The preferred and most accessible source of pre-seed funding</h1>
                <h1 className={classes["emphasis"]}>for African technology entrepreneurs</h1>
                <p>We invest <span>$25k - $150k</span> into Africa's most remarkable teams with technical founders at the earliest stage of their venture</p>
                <div className={classes["funding-link-container"]}>
                    <a  href="#" className={classes["funding-link"]}>Apply for funding</a>
                </div>
                

            </div>
            <div className={classes["img-container"]}>
                <img src='https://v.fastcdn.co/u/6025a85e/3546890-0-mouse.gif' alt="navigate downwards" />
            </div>
        
            </div>
        </div>
    )
}

export default Banner
