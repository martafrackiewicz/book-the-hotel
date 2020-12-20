import React from 'react';
import "./HotelsListElement.scss";
import Stars from "./Stars";

const HotelsListElement = ({image, name, num_stars, description, price, id}) => {

    return (
    <li className="row hotels-list-element" key={id}>
        <div className="col img">
            <img alt={"hotel_room"} src={image} className="img-fluid"/>
        </div>
        <div className="col-6 hotel-specs">
            <div className={"hotel-specs-name"}>
                <h3 className={"name"}>{name}</h3>
                <Stars num_stars={num_stars}/>
            </div>
            <p className={"description"}>{description}</p>
        </div>
        <div className="col">
            ${price}
        </div>
    </li>
    )
}


export default HotelsListElement;