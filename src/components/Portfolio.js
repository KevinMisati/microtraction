import React from 'react'
import classes from "./Portfolio.module.css"

const items = [
    {
        img:"https://v.fastcdn.co/u/855ba8b8/34650586-0-Wallet.ng.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/59790285-0-Blue-CW-Lockup.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/49465020-0-schoolable-logo-1.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/35089521-0-buycoins.jpeg",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/35554291-0-thanku-logo1-1.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/35063426-0-accounteer.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/35061771-0-Riby-Logo.jpeg",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/46368000-0-54gene.jpg",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/43061964-0-sendbox-logo.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/49464850-0-bitsika-logo-dark.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/49464645-0-Gold-Text--e2b621-1.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/49464985-0-logo-1.png",
        link:"",
        name:"dj"
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/59696496-0-Chaka-Logo.png",
        link:"",
        name:"dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59696591-0-raise-logo.png",
        link: "",
        name: "dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59696566-0-Gradely-Logo.png",
        link: "",
        name: "dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59696661-0-Lemonade-Transparent.png",
        link: "",
        name: "dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59696806-0-Instant-Rad-Logo.png",
        link: "",
        name: "dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59697056-0-Prospa20black.png",
        link: "",
        name: "dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59697081-0-Evolve-Credit-Blue-w.png",
        link: "",
        name: "dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59696996-0-CARMA-no-logo-no-tag.png",
        link: "",
        name: "dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59782205-0-Payday-logo-png.png",
        link: "",
        name: "dj"
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/59789885-0-logo-01.png",
        link: "",
        name: "dj"
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
