import React, {useState, useEffect} from 'react';
import "./Details.scss";
import {Link, useParams, useHistory} from 'react-router-dom';
import firebase from "firebase/app";
import Stars from "./Stars";
import Button from "./Button";
import {logged} from "./Login";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Details = () => {

    let { id } = useParams();
    const history = useHistory();

    const [hotelDetails, setHotelDetails] = useState({});
    const [modal, setModal] = useState(false);

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

    const handleDeleteHotel = (e, id) => {
        toggle();
        const db = firebase.firestore();
        db.collection("hotels").doc(id).delete()
            .then(() => {
            console.log("Document successfully deleted!");
            history.push("/hotels")
        }).catch(() => {
            console.error("Error removing document.");
        });
    }

    const toggle = () => setModal(!modal);

    if (Object.entries(hotelDetails).length !== 0) {
        return (
            <div className={"container"}>
                <div className={"details_wrap mb-3"}>
                    <div className={"row hotel_details_main d-flex flex-lg-row flex-column"}>
                        <div className="col img">
                            <img alt={"hotel_room"} src={hotelDetails.image_url} className="img-fluid mb-3 mb-lg-2"/>
                        </div>
                        <div className="col col-xl-6 hotel-specs">
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
                            {hotelDetails.rooms &&
                            <ul className={"hotel_rooms_list"}>
                                    {hotelDetails.rooms.single &&
                                    <li className={"hotel_rooms_element"}>{`Single: ${hotelDetails.rooms.single}`}</li>}
                                    {hotelDetails.rooms.double &&
                                    <li className={"hotel_rooms_element"}>{`Double: ${hotelDetails.rooms.double}`}</li>}
                                </ul>}
                            <div className={"buttons"}>
                                {!logged.isAuthenticated && <Button url={`/reserve/${id}`} text={"Reserve"} size={"small"}/>}
                                {logged.isAuthenticated && <div className={"admin-buttons"}>
                                    <Link to={`/details/${id}/edit`}
                                            className={"btn btn-outline-secondary"}>Edit</Link>
                                    <button onClick={toggle}
                                            className={"btn btn-outline-secondary"}>Delete</button>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={modal} centered={true} fade={false} backdrop={'static'} keyboard={false} toggle={toggle}>
                        <ModalHeader>Attention</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete this hotel?
                        </ModalBody>
                        <ModalFooter>
                            <button
                                onClick={e => handleDeleteHotel(e, id)}
                                type="button"
                                className="btn btn-outline-danger">
                                Delete
                            </button>
                            <button onClick={toggle} type="button" className="btn btn-outline-secondary">Cancel</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }

    return null;

}

export default Details;