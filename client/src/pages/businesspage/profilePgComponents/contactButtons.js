// code for contact buttons
import React from "react";
import Button from 'react-bootstrap/Button';


function contactPF(props) {

    return (
        <div>
            <Button className="ButtonText" variant="info" size="sm" > {props.email}</Button>
            <Button className="ButtonText" variant="info" size="sm" > {props.phone}</Button>
            <Button className="ButtonText" variant="info" size="sm" > {props.street}</Button>
        </div>
    )
}

export default contactPF