import React from "react"
import al from "../images/address.png" 


export default function Hero(props){
    return(
        <section className="hero-component"> 
            <div>
                <img className="hero-img" src={props.item.imageUrl}/>
            </div>
            <div className="detail">
                <img className="address-img" src={al}/>
                <span className="hero-location">{props.item.location}</span>
                <span className="hero-maps"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                <h2 className="hero-title">{props.item.title}</h2>
                <h5 className="hero-date">{props.item.startDate} - {props.item.endDate}</h5>
                <p className="hero-description">{props.item.description}</p>
            </div>
        </section>
    )
}