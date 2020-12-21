import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'normalize.css';
import Header from "./Header";
import HotelsList from "./HotelsList";
import Details from "./Details";
import {BrowserRouter, Route} from "react-router-dom";
import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLll6YVTKeMsflK2_K2Gzx0-YUwBjQwaA",
    authDomain: "book-the-hotel-fd8f3.firebaseapp.com",
    projectId: "book-the-hotel-fd8f3",
    storageBucket: "book-the-hotel-fd8f3.appspot.com",
    messagingSenderId: "722436929233",
    appId: "1:722436929233:web:9bc8777e5a0410739cf7f0"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Header/>
                <Route exact path='/' component={HotelsList} />
                <Route exact path='/details' component={Details} />
                {/*<Route path='/admin' component={AdminPanel} />*/}
            </>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));


