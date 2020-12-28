import React from 'react';
import {Link} from "react-router-dom";
import "./ReserveButton.scss";

const ReserveButton = ({id}) => {
    return <Link to={`/reserve/${id}`} className={"btn btn-outline-secondary reserve-button"}>Reserve</Link>
}

export default ReserveButton;