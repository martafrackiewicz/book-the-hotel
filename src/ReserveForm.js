import React, {useState} from 'react';
import "./ReserveForm.scss";
import firebase from "firebase/app";
import "firebase/firestore";

const ReserveForm = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
    const [checkinDate, setCheckinDate] = useState("");
    const [checkoutDate, setCheckoutDate] = useState("");

    const handleName = e => setName(e.target.value)
    const handleSurname = e => setSurname(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleRoom = e => setRoom(e.target.value)
    const handleCheckinDate = e => setCheckinDate(e.target.value)
    const handleCheckoutDate = e => setCheckoutDate(e.target.value)

    const handleSubmit = () => {
        const db = firebase.firestore();
        db.collection("reservations").doc().set({
            name: name,
            surname: surname,
            email: email,
            room: room,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            reservation_date: new Date().toLocaleString()
        });
    }

    return <div className="container">
        <h5 className="form-title">Reservation form</h5>
        <form onSubmit={handleSubmit} >
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" onChange={(e => handleName(e))}/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputSurname">Surname</label>
                    <input type="text" className="form-control" id="inputSurname" onChange={(e => handleSurname(e))}/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="text" className="form-control" id="inputEmail" onChange={(e => handleEmail(e))}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                        <label>Room</label>
                        <div className="col-md-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="gridRadios1"
                                       value="single" onChange={(e => handleRoom(e))}/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Single
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="gridRadios2"
                                       value="double" onChange={(e => handleRoom(e))}/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Double
                                </label>
                            </div>
                        </div>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputCheckinDate">Check-in date</label>
                    <input type="date" className="form-control" id="inputCheckinDate" onChange={(e => handleCheckinDate(e))}/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputCheckoutDate">Check-out date</label>
                    <input type="date" className="form-control" id="inputCheckoutDate" onChange={(e => handleCheckoutDate(e))}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary reserve-submit-button">Reserve</button>
        </form>
    </div>
}

export default ReserveForm;