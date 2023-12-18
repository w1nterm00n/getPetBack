import React from "react";
import { Link } from "react-router-dom";

const AdvertCard = (props) => {
    return (
        <div>
            <div className="col">
            <div className="card">
                <img src={props.imgLink} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title"> {props.advertType}  {props.name} </h5>
                <p className="card-text">
                    {props.description}
                </p>
                <small className="text-body-secondary">
                <Link to={'/default_pet'} className="nav-link" style={{color: "blue"}}>
                    подробнее..
                </Link>
                </small>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AdvertCard;