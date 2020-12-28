import React, {useState} from 'react';

const ReserveForm = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [room, setRoom] = useState("");
    const [checkinDate, setCheckinDate] = useState("");
    const [checkoutDate, setCheckoutDate] = useState("");

    const handleName = (e) => setName(e.target.value)

    return <form>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleName(e)}/>
        <div className="form-group row">
            <label htmlFor="example-date-input" className="col-2 col-form-label">Date</label>
            <div className="col-10">
                <input className="form-control" type="date" id="example-date-input" />
            </div>
        </div>
    </form>
}

export default ReserveForm;