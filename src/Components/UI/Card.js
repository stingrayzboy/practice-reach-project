import React from "react";
import cards from './Card.module.css'
const Card = (props) => {
    return <div className={`${cards.card} ${props.className}`}>{props.children}</div>
}

export default Card