import React, {useEffect, useState} from 'react';
import "./ReserveForm.scss";
import firebase from "firebase/app";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useHistory, useParams} from "react-router-dom";

const EditForm = () => {

    let { id } = useParams();
    const history = useHistory();

    const [hotelDetails, setHotelDetails] = useState({});
    const [modal, setModal] = useState(false);

    const handleAddress = e => setHotelDetails({...hotelDetails, address: e.target.value});
    const handleAnimals = e => setHotelDetails({...hotelDetails, animals: e.target.checked});
    const handleBreakfast = e => setHotelDetails({...hotelDetails, breakfast: e.target.checked});
    const handleDescription = e => setHotelDetails({...hotelDetails, description: e.target.value});
    const handleGym = e => setHotelDetails({...hotelDetails, gym: e.target.checked});
    const handleImageUrl = e => setHotelDetails({...hotelDetails, image_url: e.target.value});
    const handleHotelName = e => setHotelDetails({...hotelDetails, name: e.target.value})
    const handlePrice = e => setHotelDetails({...hotelDetails, price: parseInt(e.target.value)})
    const handleRestaurant = e => setHotelDetails({...hotelDetails, restaurant: e.target.checked})
    const handleRoomService = e => setHotelDetails({...hotelDetails, room_service: e.target.checked})
    const handleRoomsSingle = e => setHotelDetails({...hotelDetails, rooms: {...hotelDetails.rooms, single: parseInt(e.target.value)}})
    const handleRoomsDouble = e => setHotelDetails({...hotelDetails, rooms: {...hotelDetails.rooms, double: parseInt(e.target.value)}})
    const handleStars = e => setHotelDetails({...hotelDetails, stars: parseInt(e.target.value)})
    const handleSwimmingPool = e => setHotelDetails({...hotelDetails, swimming_pool: e.target.checked})
    const handleWifi = e => setHotelDetails({...hotelDetails, wifi: e.target.checked})

    const handleReturn = () => history.push(`/details/${id}`)

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('hotels').doc(id).get()
            .then(snapshot => {
                setHotelDetails(snapshot.data());
            })
    }, []);

    const toggle = () => setModal(!modal);

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = firebase.firestore();

        console.log(hotelDetails)
        db.collection("hotels").doc(id).update(hotelDetails)
            .then(function() {
                console.log("Document successfully updated!");
                toggle();
            });
    }

    if (Object.entries(hotelDetails).length !== 0) {
        return <div className="container">
            <h5 className="form-title">Edit form</h5>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputName">Hotel name</label>
                        <input type="text" className="form-control" id="inputName"
                               defaultValue={hotelDetails.name}
                               onChange={(e => handleHotelName(e))}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputName">Address</label>
                        <input type="text" className="form-control" id="inputName"
                               defaultValue={hotelDetails.address}
                               onChange={(e => handleAddress(e))}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputSurname">Stars</label>
                        <input type="text" className="form-control" id="inputSurname"
                               defaultValue={hotelDetails.stars}
                               onChange={(e => handleStars(e))}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail">Price</label>
                        <input type="text" className="form-control" id="inputEmail"
                               defaultValue={hotelDetails.price}
                               onChange={(e => handlePrice(e))}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputName">Available single rooms</label>
                        <input type="text" className="form-control" id="inputName"
                               defaultValue={hotelDetails.rooms.single}
                               onChange={(e => handleRoomsSingle(e))}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputSurname">Available double rooms</label>
                        <input type="text" className="form-control" id="inputSurname"
                               defaultValue={hotelDetails.rooms.double}
                               onChange={(e => handleRoomsDouble(e))}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCheckinDate">Image Url</label>
                        <textarea type="text" className="form-control" id="inputCheckinDate"
                               defaultValue={hotelDetails.image_url}
                               onChange={(e => handleImageUrl(e))}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCheckoutDate">Description</label>
                        <textarea className="form-control" id="inputCheckoutDate"
                                  defaultValue={hotelDetails.description}
                                  onChange={(e => handleDescription(e))}
                        />
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="form-row">
                    <div className="form-group col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                   defaultChecked={hotelDetails.animals}
                                   onChange={(e => handleAnimals(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Animals</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                   defaultChecked={hotelDetails.breakfast}
                                   onChange={(e => handleBreakfast(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Breakfast</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                   defaultChecked={hotelDetails.gym}
                                   onChange={(e => handleGym(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Gym</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                   defaultChecked={hotelDetails.swimming_pool}
                                   onChange={(e => handleSwimmingPool(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Swimming pool</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                   defaultChecked={hotelDetails.wifi}
                                   onChange={(e => handleWifi(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Wifi</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                   defaultChecked={hotelDetails.room_service}
                                   onChange={(e => handleRoomService(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Room service</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                   defaultChecked={hotelDetails.restaurant}
                                   onChange={(e => handleRestaurant(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Restaurant</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary reserve-submit-button">Submit</button>
            </form>
            <Modal isOpen={modal} centered={true} fade={false} backdrop={'static'} keyboard={false} toggle={toggle}>
                <ModalHeader>Edit successful!</ModalHeader>
                <ModalFooter>
                    <button onClick={handleReturn} className="btn btn-primary">Return to hotel details</button>
                </ModalFooter>
            </Modal>
        </div>
    }

    return null;
}

export default EditForm;