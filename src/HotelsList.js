import React, {useState, useEffect} from 'react';
import HotelsListElement from "./HotelsListElement";
import firebase from "firebase/app";
import "firebase/firestore";

const HotelsList = () => {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('hotels').get()
            .then(snapshot => {
            snapshot.docs.forEach(doc => {
                setHotels(prevState => [...prevState, doc])
            });
        })
    }, []);



    return (
        <div className={"container"}>
            <ul className={"hotels_list"}>
                {hotels.map((el, id) => {
                    return <HotelsListElement
                        id={el.id}
                        image={el.data().image_url}
                        name={el.data().name}
                        num_stars={el.data().stars}
                        address={el.data().address}
                        description={el.data().description}
                        price={el.data().price}
                        key={id}/>
                })}
            </ul>
        </div>
    )
}

export default HotelsList;