import React from "react";
import photo from '../../brown_cat.jpg'


const PersonStatistics = () => {
    return (
        <div>
            <div style={{ width: "fit-content", margin: "0 auto" }}>
                <div
                    className="card"
                    style={{ width: "fit-content", margin: "50px 0 50px 0", border: "none" }}
                >
                    <div
                    className="card-header"
                    style={{ textAlign: "center", padding: "20px 0" }}
                    >
                    <b>Статистика пользователя</b>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Количество дней с момента регистрации:
                    </li>
                    <li className="list-group-item">Количество объявлений: </li>
                    <li className="list-group-item">
                        Количество животных, нашедших дом благодаря пользователю:{" "}
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PersonStatistics;