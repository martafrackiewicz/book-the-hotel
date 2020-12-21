import React from 'react';
import {Link} from "react-router-dom";
import "./DetailsButton.scss";

const DetailsButton = () => {
    return <Link to={"/details"} className={"btn btn-outline-secondary details-button"}>More details</Link>
}

export default DetailsButton;