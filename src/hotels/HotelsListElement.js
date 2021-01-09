import React from 'react';
import HotelsListElementMain from "./HotelsListElementMain";

const HotelsListElement = ({image, name, num_stars, address, description, price, id}) => {

    return (
    <li className="row hotels-list-element d-flex flex-lg-row flex-column" key={id}>
        <HotelsListElementMain image={image} name={name}
                              num_stars={num_stars} address={address}
                              description={description} price={price} id={id} detailsButtonVisible={true}/>
    </li>
    )
}

export default HotelsListElement;
