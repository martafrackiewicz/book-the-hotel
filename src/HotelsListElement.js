import React from 'react';
import "./HotelsListElement.scss"

const HotelsListElement = ({image, name, price, id}) => {

    return (
    <li className="row hotels-list-element" key={id}>
        <div className="col img">
            <img alt={"hotel_room"} src={image} className="img-fluid"/>
        </div>
        <div className="col-6">
            {name}
        </div>
        <div className="col">
            {price}
        </div>
    </li>
    )
}


export default HotelsListElement;