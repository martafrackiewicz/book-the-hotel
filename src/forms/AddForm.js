import React, {useEffect, useState} from 'react';
import "./Form.scss";
import firebase from "firebase/app";
import MyModal from "../common/MyModal";

const AddForm = () => {

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

    const toggle = () => setModal(!modal);

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection("hotels").add(hotelDetails)
            .then(() => {
                console.log("Document successfully added!");
                toggle();
            });
    }

        return <div className="container">
            <h5 className="form-title">Add new hotel</h5>
            <form className={"animate__animated animate__fadeInDown"} onSubmit={(e) => handleSubmit(e)}>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label className={"required"} htmlFor="inputHotelName">Hotel name</label>
                        <input type="text" className="form-control" id="inputHotelName"
                               onChange={(e => handleHotelName(e))}
                               required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label className={"required"} htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress"
                               onChange={(e => handleAddress(e))}
                               required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label className={"required"} htmlFor="inputStars">Stars</label>
                        <input type="text" className="form-control" id="inputStars"
                               onChange={(e => handleStars(e))}
                               required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label className={"required"} htmlFor="inputPrice">Price</label>
                        <input type="text" className="form-control" id="inputPrice"
                               onChange={(e => handlePrice(e))}
                               required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className={"required"} htmlFor="inputRoomsSingle">Available single rooms</label>
                        <input type="text" className="form-control" id="inputRoomsSingle"
                               onChange={(e => handleRoomsSingle(e))}
                               required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label className={"required"} htmlFor="inputRoomsDouble">Available double rooms</label>
                        <input type="text" className="form-control" id="inputRoomsDouble"
                               onChange={(e => handleRoomsDouble(e))}
                               required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className={"required"} htmlFor="inputImageUrl">Image Url</label>
                        <textarea type="text" className="form-control" id="inputImageUrl"
                                  onChange={(e => handleImageUrl(e))}
                                  required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label className={"required"} htmlFor="inputDescription">Description</label>
                        <textarea className="form-control" id="inputDescription"
                                  onChange={(e => handleDescription(e))}
                                  required
                        />
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="form-row">
                    <div className="form-group col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                   onChange={(e => handleAnimals(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Animals</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                   onChange={(e => handleBreakfast(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Breakfast</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                   onChange={(e => handleGym(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Gym</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox4"
                                   onChange={(e => handleSwimmingPool(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox4">Swimming pool</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox5"
                                   onChange={(e => handleWifi(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox5">Wifi</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox6"
                                   onChange={(e => handleRoomService(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox6">Room service</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox7"
                                   onChange={(e => handleRestaurant(e))}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox7">Restaurant</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary submit-button">Submit</button>
            </form>
            <MyModal url={"/hotels"} textHeader={"Added successful!"} textButton={"Return to hotels list"}
                     isOpen={modal} toggle={toggle}/>
        </div>
}

export default AddForm;