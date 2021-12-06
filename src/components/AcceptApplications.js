import React from 'react'
import classes from "./AcceptApplications.module.css"

const AcceptApplications = () => {
    return (
        <div className={classes["accept-container"]}>
            <div className={classes["accept-content"]}>
                
                <h2 className={classes["accepting-title"]}>Accepting applications all year round</h2>

                <div className={classes["descriptions"]}>
                    <div className={classes["description"]}>
                        <div className={classes["img-container"]}>
                            <img src='https://v.fastcdn.co/u/855ba8b8/15701856-0-Icon-1.png' alt="icon" />
                        </div>
                        <p>
                            We identify the best early-stage, growth-driven technology startups with the potential to become billion dollar companies
                        </p>
                        
                            
                        
                    </div>
                    <div className={classes["description"]}>
                        <div className={classes["img-container"]}>
                            <img src='https://v.fastcdn.co/u/855ba8b8/15701946-0-Icon-2.png' alt="icon" />
                        </div>
                            <p>
                            We work closely with the startups, providing them with pre-seed funding, professional and advisory services
                            </p>
                        
                    </div>
                    <div className={classes["description"]}>
                        <div className={classes["img-container"]}>
                            <img src='https://v.fastcdn.co/u/855ba8b8/15701941-0-Icon-3.png' alt="icon" />
                        </div>
                            <p>
                            We get startups to a point where they are impressive enough to raise more funding or join world class accelerators
                            </p>
                        
                    </div>
                    <div className={classes["description"]}>

                        <div className={classes["img-container"]}>
                            <img src='https://v.fastcdn.co/u/855ba8b8/15701936-0-Icon-4.png' alt="icon" />
                        </div>
                            <p>
                            We introduce startups to later stage investors and help them navigate the process of raising a larger round of funding
                            </p>
                        
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}

export default AcceptApplications
