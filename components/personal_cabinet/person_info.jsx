import React from "react";
import avatar from '../../brown_cat.jpg'

const PersonInfo = () => {
    return (
        <div style={{marginTop: 40}}>
            <div className="card personalCabinetCard" style={{ width: "18rem" }}>
            <img src={avatar} className="card-img-top" alt="ava" />
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Имя: </li>
                <li className="list-group-item">Почта: </li>
                <li className="list-group-item">Номер телефона: </li>
                <li className="list-group-item">
                <b>id пользователя: </b>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default PersonInfo;