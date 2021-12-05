import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={classes["footer-container"]}>
            <div className={classes["footer"]}>
                <div className={classes["blog-banner"]}>
                    <div className={classes["btn"]}>
                        <a  href="#" className={classes["funding-link"]}>Visit our blog</a>
                    </div>
                </div>
                <div className={classes["footer-content"]}>
                    <h2>
                        Get actionable insights and real world advice from founders & operators who are building venture backed startups in Africa
                    </p>
                    <div className={classes["btn"]}>
                        <a  href="#" className={classes["learn-more-btn"]}>Learn more about Opentraction
                        </a>
                </div>
                <div className={classes.follow}>
                    <p>Stay in the loop by following us on twitter</p>
                        <p className={classes["made"]}>Made with ❤️ in Lagos NG</p>
                </div>
                </div>
            
                

            </div>
        </div>
    )
}

export default Footer
