import React from 'react';
import HotelsListElement from "./HotelsListElement";

const HotelsList = () => {

    const hotels = ["hotel1", "hotel2", "hotel3"]

    return (
    <div className={"container"}>
        <ul className={"hotels_list"}>
            {hotels.map((el, id) =>
                <HotelsListElement el={el} key={id}/>)}
        </ul>
    </div>
    )
}

export default HotelsList;