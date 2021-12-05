import React from 'react'
import classes from "./Portfolio.module.css"

const items = [
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },


]

const Portfolio = () => {
    return (
        <div className={classes["portfolio-container"]}>
            <h2>Portfolio</h2>
        <div className={classes["portfolios"]}>
            {
                items.map(({img,name})=> (
                    <div className={classes.item}>
                        <img src={img} alt={name} />
                    </div>
                ))
            }
        </div>
            
        </div>
    )
}

export default Portfolio
