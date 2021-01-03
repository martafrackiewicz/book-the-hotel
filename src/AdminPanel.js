import React from 'react';
import Button from "./Button";
import "./AdminPanel.scss";

const AdminPanel = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Hello, admin!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4"/>
                <nav className="nav nav-pills nav-justified admin-panel-nav">
                    <Button url={"/hotels"} text={"Hotels"}/>
                    <Button url={"/hotels/add"} text={"Add new hotel"}/>
                    <Button url={"/reservations"} text={"Reservations"}/>
                </nav>
            </div>
        </div>
    )
}

export default AdminPanel;