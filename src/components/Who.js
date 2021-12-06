import React from 'react'
import classes from "./Who.module.css"

const items = [
    {
        img:"https://v.fastcdn.co/u/855ba8b8/40058636-0-IMG-3855-Edit-2.JPG",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/40058996-0-IMG-3843-Edit-3.JPG",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/46367710-0-Chid-3.jpg",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/19523641-0-Pave.png",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/31784326-0-Andy.jpg",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/19523546-0-Michael-Seibel.jpeg",
        name:"Yale Bademosi",
        title:"Founding partner",
        twitter:""
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/16073776-0-headshot-collision-2.png",
        name: "Yale Bademosi",
        title: "Founding partner",
        twitter: ""
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
                                <h3>
                                    {name}
                                    <img src="https://v.fastcdn.co/u/855ba8b8/35554606-0-twitter.png" alt="twitter" />
                                </h3>
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
