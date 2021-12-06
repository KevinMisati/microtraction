import React from 'react'
import classes from "./Who.module.css"

const items = [
    {
        img:"https://v.fastcdn.co/u/855ba8b8/40058636-0-IMG-3855-Edit-2.JPG",
        name:"Yale Bademosi",
        company: "Microtraction",
        title:"Founding partner",
        twitter:"",
        more:"",
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/40058996-0-IMG-3843-Edit-3.JPG",
        name:"Dayo Koleowo",
        company: "Microtraction",
        title:"Managing Partner",
        twitter:"",
        more: "",
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/46367710-0-Chid-3.jpg",
        name:"Chidinma Iwueke",
        company: "Microtraction",
        title:"Managing Partner",
        twitter: "",
        more: "",
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/19523641-0-Pave.png",
        name:"Pave Investments",
        title:"Anchor Investor +",
        company:"Operational Support",
        twitter: "",
        more: "",
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/31784326-0-Andy.jpg",
        name:"Andy Volk",
        title:"Head of Ecosystem, SSA",
        company: "Google",
        twitter: "",
        more: "Global Advisor + Investor",
    },
    {
        img:"https://v.fastcdn.co/u/855ba8b8/19523546-0-Michael-Seibel.jpeg",
        name:"Michael Seibel",
        company: "Y Combinator",
        title:"CEO",
        twitter: "",
        more: "Global Advisor + Investor",
    },
    {
        img: "https://v.fastcdn.co/u/855ba8b8/16073776-0-headshot-collision-2.png",
        name: "Chris Schultz",
        company: "Launch Pad",
        title: "CEO & Co-founder",
        twitter: "",
        more: "Global Advisor + Investor",
    },
    
]

const Who = () => {
    return (
        <div className={classes["who-container"]}>
            <h2>Who We Are</h2>
            <div className={classes.who}>
                {
                    items.map(({img,name,title,twitter,company,more}) => (
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
                                <p>{company}</p>
                                <p className={classes.more}>{more}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Who
