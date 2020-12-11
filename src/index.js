import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import Header from "./Header";
import HotelsList from "./HotelsList";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Header/>
                <Route exact path='/' component={HotelsList} />
                {/*<Route path='/admin' component={AdminPanel} />*/}
            </>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));


