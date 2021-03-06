import React, {useState} from 'react';
import "./Form.scss";
import firebase from "firebase/app";
import {useParams} from "react-router-dom";
import MyModal from "../common/MyModal";

const ReserveForm = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
    const [checkinDate, setCheckinDate] = useState("");
    const [checkoutDate, setCheckoutDate] = useState("");
    const [modal, setModal] = useState(false);

    const handleName = e => setName(e.target.value)
    const handleSurname = e => setSurname(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleRoom = e => setRoom(e.target.value)
    const handleCheckinDate = e => setCheckinDate(e.target.value)
    const handleCheckoutDate = e => setCheckoutDate(e.target.value)

    const toggle = () => setModal(!modal);

    let { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection("reservations").add({
            name: name,
            surname: surname,
            email: email,
            room: room,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            reservation_date: new Date().toLocaleString(),
            hotelId: id
        })
            .then(() => toggle());
    }
    return <div className="container">
        <h5 className="form-title">Reservation form</h5>
        <form className={"animate__animated animate__fadeInDown"} onSubmit={(e) => handleSubmit(e)} >
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label className={"required"} htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" onChange={(e => handleName(e))}
                           required />
                </div>
                <div className="form-group col-md-4">
                    <label className={"required"} htmlFor="inputSurname">Surname</label>
                    <input type="text" className="form-control" id="inputSurname" onChange={(e => handleSurname(e))}
                           required/>
                </div>
                <div className="form-group col-md-4">
                    <label className={"required"} htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" onChange={(e => handleEmail(e))}
                           required/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                        <label className={"required"}>Room</label>
                        <div className="col-md-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="gridRadios1"
                                       value="single" name="rooms" onChange={(e => handleRoom(e))}
                                       required/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Single
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="gridRadios2"
                                       value="double" name="rooms" onChange={(e => handleRoom(e))}
                                       required/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Double
                                </label>
                            </div>
                        </div>
                </div>
                <div className="form-group col-md-4">
                    <label className={"required"} htmlFor="inputCheckinDate">Check-in date</label>
                    <input type="date" className="form-control" id="inputCheckinDate" onChange={(e => handleCheckinDate(e))}
                           required/>
                </div>
                <div className="form-group col-md-4">
                    <label className={"required"} htmlFor="inputCheckoutDate">Check-out date</label>
                    <input type="date" className="form-control" id="inputCheckoutDate" onChange={(e => handleCheckoutDate(e))}
                           required/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary submit-button">Reserve</button>
        </form>
        <MyModal url={"/"} textHeader={"Reservation successful!"} textButton={"Return to main page"}
                 isOpen={modal} toggle={toggle}/>
    </div>
}

export default ReserveForm;