import React from "react";
import Slide from "./cards/slide";
import photo from '../brown_cat.jpg'

const Slider = () => {
  debugger;
    return (
      
      <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        {/* <div className="carousel-item active">
          <img
            src={photo}
            className="d-block w-100 slide"
            alt="cat"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Серый кот, был найден в Приморском районе</h5>
            <a
              href="advert.html"
              style={{ color: "white", fontSize: 20, fontWeight: 500 }}
            >
              подробнее
            </a>
          </div>
        </div> */}
        <Slide photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQqDYOhlR-0LbL8pCU0sQ4caYqPTS9iDjMUhiQZzoNe4HxYXzjLj0Hca6NcYzQZQxdP8&usqp=CAU"
        description="кот кот кот кот кот" className="active"/>

        <Slide photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQqDYOhlR-0LbL8pCU0sQ4caYqPTS9iDjMUhiQZzoNe4HxYXzjLj0Hca6NcYzQZQxdP8&usqp=CAU"
        description="кот кот кот кот кот" className=""/>

        <Slide photo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg "
        description="маленький котёночек" className=""/>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
    
    
    );
};

export default Slider;