import React, {useState, useEffect} from 'react';
import "./Details.scss";
import { useParams } from 'react-router-dom';
import firebase from "firebase/app";
import Stars from "./Stars";
import ReserveButton from "./ReserveButton";
import {logged} from "./Login";


const Details = () => {

    let { id } = useParams();

    const [hotelDetails, setHotelDetails] = useState({});

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('hotels').doc(id).get()
            .then(snapshot => setHotelDetails(snapshot.data()))
    }, []);

    const createExtrasElement = (element, content) => {
        if (element) {
            return <li className={"hotel_extras_element"}>{content}</li>
        }
    }

    let animals;
    if (hotelDetails.animals) {
        animals = <li className={"hotel_extras_element"}>Pet are allowed</li>
    } else {
        animals = <li className={"hotel_extras_element"}>Pet are not allowed</li>
    }


    const handleEditHotel = (e, id) => {
        e.preventDefault();
        console.log("edit", id)
    }

    const handleDeleteHotel = (e, id) => {
        e.preventDefault();
        console.log("delete", id)
    }


    if (Object.entries(hotelDetails).length !== 0) {
        return (
            <div className={"container"}>
                <div className={"details_wrap"}>
                    <div className={"row hotel_details_main"}>
                        <div className="col img">
                            <img alt={"hotel_room"} src={hotelDetails.image_url} className="img-fluid"/>
                        </div>
                        <div className="col-6 hotel-specs">
                            <div className={"hotel-specs-name"}>
                                <h3 className={"name"}>{hotelDetails.name}</h3>
                                <Stars num_stars={hotelDetails.stars}/>
                            </div>
                            <p className={"address"}><strong>Address:</strong> {hotelDetails.address}</p>
                            <p className={"description"}>{hotelDetails.description}</p>
                        </div>
                        <div className="col price">
                            <p>${hotelDetails.price}</p>
                        </div>
                    </div>
                    <div className={"row hotel_details_extras"}>
                        <div className="col hotel_extras">
                            <h4>Facilities:</h4>
                            <ul className="hotel_extras_list">
                                {createExtrasElement(hotelDetails.restaurant, "Hotel restaurant")}
                                {createExtrasElement(hotelDetails.breakfast, "Breakfast included")}
                                {createExtrasElement(hotelDetails.room_service, "Room service")}
                                {createExtrasElement(hotelDetails.gym, "Gym")}
                                {createExtrasElement(hotelDetails.swimming_pool, "Swimming pool")}
                                {createExtrasElement(hotelDetails.wifi, "Free WiFi")}
                                {animals}
                            </ul>
                        </div>
                        <div className="col hotel_booking">
                                <h4>Available rooms:</h4>
                                <ul className={"hotel_rooms_list"}>
                                    <li className={"hotel_rooms_element"}>{`Single: ${hotelDetails.rooms.single}`}</li>
                                    <li className={"hotel_rooms_element"}>{`Double: ${hotelDetails.rooms.double}`}</li>
                                </ul>
                            <div class={"buttons"}>
                                {!logged.isAuthenticated && <ReserveButton id={id} />}
                                {logged.isAuthenticated && <div className={"admin-buttons"}>
                                    <button onClick={e => handleEditHotel(e, id)} className={"btn btn-outline-secondary"}>Edit</button>
                                    <button onClick={e => handleDeleteHotel(e, id)} className={"btn btn-outline-secondary"}>Delete</button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null;


}

export default Details;