import React from 'react';
import "./HotelsListElement.css"

const HotelsListElement = ({id}) => {

    return (
    <li className="row hotels-list-element" key={id}>
        <div className="col">
            image
        </div>
        <div className="col-6">
            title, description
        </div>
        <div className="col">
            price
        </div>
    </li>
    )
}


export default HotelsListElement;