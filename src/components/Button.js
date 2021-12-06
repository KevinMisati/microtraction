import React from 'react'
import classes from "./Button.module.css"

const Button = ({text,href}) => {
    return (
         <div className={classes.button}>
                    <a href={href} className={classes["button-link"]}>{text}</a>
                </div>
    )
}

export default Button
