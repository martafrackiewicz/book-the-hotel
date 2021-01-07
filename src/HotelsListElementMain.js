import React from 'react';
import "./HotelsListElementMain.scss";
import Stars from "./Stars";
import Button from "./Button";

const HotelsListElementMain = ({image, name, num_stars, address, description, price, id, detailsButtonVisible}) => {

    return (<>
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
                {detailsButtonVisible && <Button url={`/details/${id}`} text={"More details"} size={"small"}/>}
            </div>
        </>
    )
}

export default HotelsListElementMain;
