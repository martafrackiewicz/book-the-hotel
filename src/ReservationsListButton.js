import React from 'react';
import {Link} from "react-router-dom";
import "./ReservationsListButton.scss";

const ReservationsListButton = () => {
    return <Link to={"/reservations"} className={"btn btn-outline-secondary reservations-list-button"}>Reservations</Link>
}

export default ReservationsListButton;