import React, {useState, useEffect} from 'react';
import firebase from "firebase";

const ReservationsList = () => {

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('reservations').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                const reservation = doc.data();
                const hotelId = reservation.hotelId;
                db.collection('hotels').doc(hotelId).get().then(snapshot => {
                    reservation['hotelName'] = snapshot.data().name;
                    setReservations(prevState => [...prevState, reservation])
                })
            })
        })
    }, []);

    return <div className="container">
        <table className="table table-striped table-responsive-md">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Check-id date</th>
                <th scope="col">Check-out date</th>
                <th scope="col">Hotel name</th>
                <th scope="col">Room</th>
                <th scope="col">Reservation date</th>
            </tr>
            </thead>
            <tbody>
            {reservations.map(( el, id ) => {
                let number = id+1
                return (
                    <tr key={id}>
                        <td>{number}</td>
                        <td>{el.name} {el.surname}</td>
                        <td>{el.email}</td>
                        <td>{el.checkinDate}</td>
                        <td>{el.checkoutDate}</td>
                        <td>{el.hotelName}</td>
                        <td>{el.room}</td>
                        <td>{el.reservation_date}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
}

export default ReservationsList;