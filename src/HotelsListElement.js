import React from 'react';
import "./HotelsListElement.scss";
import Stars from "./Stars";
import Button from "./Button";

const HotelsListElement = ({image, name, num_stars, address, description, price, id}) => {

    return (
    <li className="row hotels-list-element d-flex flex-lg-row flex-column" key={id}>
        <div className="col img">
            <img alt={"hotel_room"} src={image} className="img-fluid mb-3 mb-lg-2"/>
        </div>
        <div className="col-6 col hotel-specs">
            <div className={"hotel-specs-name"}>
                <h3 className={"name"}>{name}</h3>
                <Stars num_stars={num_stars}/>
            </div>
            <p className={"address"}><strong>Address:</strong> {address}</p>
            <p className={"description"}>{description}</p>
        </div>
        <div className="col price">
            <p>${price}</p>
            <Button url={`/details/${id}`} text={"More details"} size={"small"}/>
        </div>
    </li>
    )
}


export default HotelsListElement;