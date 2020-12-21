import React from 'react';
import {Link} from "react-router-dom";
import "./DetailsButton.scss";

const DetailsButton = ({id}) => {
    return <Link to={`/details/${id}`} className={"btn btn-outline-secondary details-button"}>More details</Link>
}

export default DetailsButton;