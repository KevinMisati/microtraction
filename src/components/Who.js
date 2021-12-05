import React from 'react'
import classes from "./Who.module.css"

const items = [
    {
        img:"//v.fastcdn.co/u/855ba8b8/46367710-0-Chid-3.jpg",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"//v.fastcdn.co/u/855ba8b8/46367710-0-Chid-3.jpg",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"//v.fastcdn.co/u/855ba8b8/46367710-0-Chid-3.jpg",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"//v.fastcdn.co/u/855ba8b8/46367710-0-Chid-3.jpg",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"//v.fastcdn.co/u/855ba8b8/46367710-0-Chid-3.jpg",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
]

const Who = () => {
    return (
        <div className={classes["who-container"]}>
            <h2>Who We Are</h2>
            <div className={classes.who}>
                {
                    items.map(({img,name,title,twitter}) => (
                        <div className={classes.item}>
                            <div className={classes["img-container"]}>
                                <img src={img} alt={title} />
                            </div>
                            <div>
                                <p>{name} <i></i></p>
                                <p>{title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Who
