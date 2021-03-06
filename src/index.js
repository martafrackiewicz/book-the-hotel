import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'normalize.css';
import 'animate.css';
import Header from "./header/Header";
import HotelsList from "./hotels/HotelsList";
import HotelDetails from "./hotels/HotelDetails";
import ReserveForm from "./forms/ReserveForm";
import {HashRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdminPanel from "./admin/AdminPanel";
import Login from "./Login";
import ReservationsList from "./reservations/ReservationsList";
import EditForm from "./forms/EditForm";
import AddForm from "./forms/AddForm";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDLll6YVTKeMsflK2_K2Gzx0-YUwBjQwaA",
    authDomain: "book-the-hotel-fd8f3.firebaseapp.com",
    projectId: "book-the-hotel-fd8f3",
    storageBucket: "book-the-hotel-fd8f3.appspot.com",
    messagingSenderId: "722436929233",
    appId: "1:722436929233:web:9bc8777e5a0410739cf7f0"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().signOut();

const App = () => {
    return (
        <HashRouter>
            <>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HotelsList} />
                    <Route exact path={`/details/:id`} component={HotelDetails} />
                    <Route exact path={`/details/:id/edit`} component={EditForm} />
                    <Route exact path={`/reserve/:id`} component={ReserveForm} />
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute exact path='/reservations' component={ReservationsList} />
                    <Route exact path='/hotels' component={HotelsList} />
                    <Route exact path='/hotels/add' component={AddForm} />
                    <PrivateRoute exact path="/admin" component={AdminPanel} />
                </Switch>
            </>
        </HashRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));


