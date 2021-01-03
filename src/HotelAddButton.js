import React from 'react';
import {Link} from "react-router-dom";
import "./HotelAddButton.scss";

const HotelAddButton = () => {
    return <Link to={"/hotels/add"} className={"btn btn-outline-secondary hotels-list-button"}>Add new hotel</Link>
}

export default HotelAddButton;