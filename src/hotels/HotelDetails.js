import React, {useState, useEffect} from 'react';
import "./HotelDetails.scss";
import HotelsListElementMain from "./HotelsListElementMain";
import {Link, useParams} from 'react-router-dom';
import firebase from "firebase/app";
import Button from "../common/Button";
import {logged} from "../Login";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBan,
    faCoffee,
    faConciergeBell,
    faDumbbell,
    faEdit,
    faPaw, faSwimmingPool,
    faTrashAlt,
    faUtensils, faWifi
} from '@fortawesome/free-solid-svg-icons'
import MyModal from "../common/MyModal";


const HotelDetails = () => {

    let { id } = useParams();

    const [hotelDetails, setHotelDetails] = useState({});
    const [modal, setModal] = useState(false);
    const [modalAttention, setModalAttention] = useState(false);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('hotels').doc(id).get()
            .then(snapshot => setHotelDetails(snapshot.data()))
    }, []);

    const createExtrasElement = (element, content, icon) => {
        if (element) {
            return <li className={"hotel_extras_element"}><FontAwesomeIcon icon={icon} className={"icon"}/>{content}</li>
        }
    }

    let animals;
    if (hotelDetails.animals) {
        animals = <li className={"hotel_extras_element"}><FontAwesomeIcon icon={faPaw} className={"icon"}/>Pet are allowed</li>
    } else {
        animals = <li className={"hotel_extras_element"}><FontAwesomeIcon icon={faBan} className={"icon"}/>Pet are not allowed</li>
    }

    const handleDeleteHotel = (e, id) => {
        toggleFinally();
        const db = firebase.firestore();
        db.collection("hotels").doc(id).delete()
            .then(() => {
            console.log("Document successfully deleted!");
        }).catch(() => {
            console.error("Error removing document.");
        });
    }

    const toggleFinally = () => {
        toggleAttention();
        setModal(!modal);
    };
    const toggleAttention = () => setModalAttention(!modalAttention);

    if (Object.entries(hotelDetails).length !== 0) {
        return (
            <div className={"container"}>
                <div className={"details_wrap mb-3 animate__animated animate__zoomIn animate__faster"}>
                    <div className={"row hotel_details_main d-flex flex-lg-row flex-column"}>
                        <HotelsListElementMain image={hotelDetails.image_url} name={hotelDetails.name}
                                               num_stars={hotelDetails.stars} address={hotelDetails.address}
                                               description={hotelDetails.description} price={hotelDetails.price} id={id}
                                               detailsButtonVisible={false}/>
                    </div>
                    <div className={"row hotel_details_extras"}>
                        <div className="col hotel_extras">
                            <h4>Facilities:</h4>
                            <ul className="hotel_extras_list">
                                {createExtrasElement(hotelDetails.restaurant, "Hotel restaurant", faUtensils)}
                                {createExtrasElement(hotelDetails.breakfast, "Breakfast included", faCoffee)}
                                {createExtrasElement(hotelDetails.room_service, "Room service", faConciergeBell)}
                                {createExtrasElement(hotelDetails.gym, "Gym", faDumbbell)}
                                {createExtrasElement(hotelDetails.swimming_pool, "Swimming pool", faSwimmingPool)}
                                {createExtrasElement(hotelDetails.wifi, "Free WiFi", faWifi)}
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
                                            className={"btn btn-outline-secondary small-button"}>
                                        <FontAwesomeIcon icon={faEdit} className={"icon"}/>Edit</Link>
                                    <button onClick={toggleAttention}
                                            className={"btn btn-outline-secondary small-button"}>
                                        <FontAwesomeIcon icon={faTrashAlt} className={"icon"}/>Delete</button>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={modalAttention} centered={true} fade={false} backdrop={'static'} keyboard={false} toggle={toggleAttention}>
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
                            <button onClick={toggleAttention} type="button" className="btn btn-outline-secondary">Cancel</button>
                        </ModalFooter>
                    </Modal>
                    <MyModal url={"/hotels"} toggle={toggleFinally} textButton={"Return to hotels list"}
                             textHeader={"Delete successful!"} isOpen={modal} />
                </div>
            </div>
        )
    }

    return null;

}

export default HotelDetails;