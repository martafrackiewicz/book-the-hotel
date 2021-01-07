import React from 'react';
import Button from "./Button";
import "./AdminPanel.scss";

const AdminPanel = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Hello, admin!</h1>
                <p className="lead">Here is your back-office &ndash; you can browse and manage all hotels, add new one
                    or check the reservations from your visitors.</p>
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