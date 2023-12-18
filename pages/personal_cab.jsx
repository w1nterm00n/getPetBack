import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import PersonInfo from '../components/personal_cabinet/person_info';
import PersonStatistics from '../components/personal_cabinet/person_statistics';
import UserAdvertCard from '../components/cards/user_advert_card';

const PersonalCab = () => {
  return (
    <div>
        <Header/>
        <main style={{'minHeight': '70vh'}}>
          <h1>Личный кабинет</h1>

        <div className="not_register_div">
          <p>Вы не авторизованы!</p>
          <div className="authorization">
            <Link to={'/registration_page'} className="nav-link">
              Регистрация
            </Link>
            <Link to={'/auth_page'} className="nav-link">
              Вход
            </Link>
          </div>
        </div>

        <PersonInfo/>
        <PersonStatistics/>
        <>
  <h4 style={{ textAlign: "center", margin: "40px 0" }}>
    Объявления пользователя
  </h4>
  <div style={{ display: "flex", justifyContent: "end" }}>
    <button className="btn btn-primary" style={{ margin: "0 100px 30px 0" }}>
      Добавить объявление
    </button>
  </div>
</>

          <div className='card-group userAdverts'>
            <UserAdvertCard photo="https://i.pinimg.com/474x/ea/24/c9/ea24c9cc8bcabe8bf87645e88d3bb8ff.jpg" 
            advertType="Найден" name="кот"/>

            <UserAdvertCard photo="https://i.pinimg.com/474x/ea/24/c9/ea24c9cc8bcabe8bf87645e88d3bb8ff.jpg" 
            advertType="Найден" name="кот"/>
          </div>
        </main>
        <Footer/>
    </div>
  );
};

export default PersonalCab;
