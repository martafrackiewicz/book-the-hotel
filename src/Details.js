import React, {useState, useEffect} from 'react';
import "./Details.scss";
import { useParams } from 'react-router-dom';

const Details = () => {

    let { id } = useParams();

    return (
        <div className={"container"}>
            <div className={"details_wrap"}>
                <p>Details </p>
                <p>ID: <strong>{id}</strong></p>
            </div>
        </div>
    )
}

export default Details;