import React from "react";
import card from "./card.module.css";

export function CardItem({title, value}) {
    return (
        <p className={card.item}>
            <span className={card.title}>{title}</span>
            <span className={card.value}>{value}</span>
        </p>
    )
}