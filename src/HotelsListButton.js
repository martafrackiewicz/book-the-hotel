import React from 'react';
import {Link} from "react-router-dom";
import "./HotelsListButton.scss";

const HotelsListButton = () => {
    return <Link to={"/hotels"} className={"btn btn-outline-secondary hotels-list-button"}>Hotels</Link>
}

export default HotelsListButton;