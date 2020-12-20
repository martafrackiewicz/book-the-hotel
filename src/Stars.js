import React from 'react';
import "./Stars.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Stars = ({num_stars}) => {

    const stars = [];
    for (let i = 0; i < num_stars; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} className={"star"}/>);
    }

    return <>{stars}</>;
}

export default Stars;