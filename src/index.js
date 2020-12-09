import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Header";
import HotelsList from "./HotelsList";

const App = () => {
    return (
    <>
        <Header/>
        <HotelsList/>
    </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));


