import React from "react"
import img from "./katie_zaferes.png"
import star from "./star.png"
export default function Card(props) {
    return (
        <div className="card">
            <img src={img} alt="hero" className="katie--photo" />
            <div className="card--stats">
            <img src={star} alt="star" className="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}