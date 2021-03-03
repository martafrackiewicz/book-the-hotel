import React, {useState, useEffect} from 'react';
import firebase from "firebase";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MyModal from "../common/MyModal";

const ReservationsList = () => {

    const [reservations, setReservations] = useState([])
    const [modal, setModal] = useState(false);
    const [modalAttention, setModalAttention] = useState(false);
    const [resIdToDelete, setResIdToDelete] = useState('')

    const getReservations = () => {
        const db = firebase.firestore();
        db.collection('reservations').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                const reservation = doc.data();
                console.log("rezerwacja", reservation)
                reservation['resId'] = doc.id;
                const hotelId = reservation.hotelId;
                db.collection('hotels').doc(hotelId).get().then(snapshot => {
                    reservation['hotelName'] = snapshot.data().name;
                    setReservations(prevState => [...prevState, reservation])
                })
            })
        })
    }

    const reloadReservations = () => {
        setReservations([]);
        getReservations();
    }

    const handleCloseAfterDeleteReservation = () => {
        reloadReservations();
        setModal(!modal);
    }

    useEffect(() => {
        getReservations();
    }, []);

    const handleDeleteReservation = () => {
        toggleFinally();
        const db = firebase.firestore();
        console.log(resIdToDelete)
        db.collection("reservations").doc(resIdToDelete).delete()
            .then(() => {
                console.log("Reservation successfully deleted!");
            }).catch(() => {
            console.error("Error removing reservation.");
        });
    }

    const toggleFinally = () => {
        closeAttention();
        setModal(!modal);
    };

    const openAttention = (id) => {
        setResIdToDelete(id);
        setModalAttention(true);
    };

    const closeAttention = () => setModalAttention(false);


    return (
        <>
            <div className="container">
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
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {reservations.map((el, id) => {
                        let number = id + 1
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
                                <td>
                                    <button className={"btn"} onClick={() => openAttention(el.resId)}>
                                        <FontAwesomeIcon icon={faTrashAlt} className={"icon"}/>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={modalAttention} centered={true} fade={false} backdrop={'static'} keyboard={false}>
                <ModalHeader>Attention</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this reservation?
                </ModalBody>
                <ModalFooter>
                    <button
                        onClick={handleDeleteReservation}
                        type="button"
                        className="btn btn-outline-danger">
                        Delete
                    </button>
                    <button onClick={closeAttention} type="button" className="btn btn-outline-secondary">Cancel
                    </button>
                </ModalFooter>
            </Modal>
            <MyModal url={null} toggle={toggleFinally} textButton={"Close"}
                     textHeader={"Delete successful!"} isOpen={modal}
                afterClosed={handleCloseAfterDeleteReservation} />
        </>
    )
}

export default ReservationsList;