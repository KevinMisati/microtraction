import React from 'react'
import classes from "./Button.module.css"

const Button = ({text}) => {
    return (
         <div className={classes.button}>
                    <a className={classes["button-link"]}>{text}</a>
                </div>
    )
}

export default Button
