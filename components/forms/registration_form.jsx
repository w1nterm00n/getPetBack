import React from "react";

const Registration_Form = () => {
    return (
        <div>
            <form
            className="registration_form"
            style={{ width: "fit-content", margin: "0 auto", paddingTop: 30 }}
            >
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Ваше имя
                </label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Ваша фамилия
                </label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Ваш пароль
                </label>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Ваша почта
                </label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                Мы не с кем ею не поделимся
                </div>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                Я согласен с соглашением
                </label>
            </div>
            <button type="submit" id="sendRegFormBtn" className="btn btn-primary">
                Зарегестрироваться
            </button>
            <button className="btn btn-primary leave_btn">Отмена</button>
            </form>

        </div>
    );
};

export default Registration_Form;