import React, {useState} from 'react';
import "./ReserveForm.scss";

const ReserveForm = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [room, setRoom] = useState("");
    const [checkinDate, setCheckinDate] = useState("");
    const [checkoutDate, setCheckoutDate] = useState("");


    const handleName = (e) => setName(e.target.value)

    return <div className="container">
        <h5 className="form-title">Reservation form</h5>
        <form>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputSurname">Surname</label>
                    <input type="text" className="form-control" id="inputSurname" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="text" className="form-control" id="inputEmail" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                        <label>Room</label>
                        <div className="col-md-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                       value="option1" checked />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Single
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                       value="option2" />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Double
                                </label>
                            </div>
                        </div>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputCheckinDate">Check-in date</label>
                    <input type="date" className="form-control" id="inputCheckinDate" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputCheckoutDate">Check-out date</label>
                    <input type="date" className="form-control" id="inputCheckoutDate" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary reserve-submit-button">Reserve</button>
        </form>
    </div>
}

export default ReserveForm;