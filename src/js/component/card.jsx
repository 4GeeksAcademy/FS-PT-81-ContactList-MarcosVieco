import React, { useContext } from "react";
import "../../styles/card.css";
import { Context } from "../store/appContext";

export const Card = (props) => {
    const {store, actions} = useContext(Context)
    return (
        <div className="card">
            <div className="d-flex justify-content-between">
                <div className="leftSide d-flex">
                    <img className="rounded-circle cardImg" src="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2019/11/09/andras-arato.jpeg" alt="mondongo" />
                    <div className="flex-column align-content-center ms-4">
                        <p>{props.name}</p>
                        <p>{props.email}</p>
                        <p>{props.phone}</p>
                        <p>{props.address}</p>
                    </div>
                </div>
                <div className="align-content-center">
                    <i className="fa-solid fa-pencil me-5"></i>
                    <i className="fa-solid fa-trash me-5" onClick={()=>actions.deleteContact(props.id)}></i>
                </div>
            </div>
        </div>
        )
}