import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from '../components/slider';
import Subscribe_Form from '../components/forms/subscribe_form';
import AdvertCard from '../components/cards/advert_card';
import Slide from '../components/cards/slide';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

const Main = () => {

  return (
    <div>
        <Header/>
        <main>
          <h1>Найденные животные</h1>
          <Slider/>
          {/* <Slide/> */}
          <div className='cardsContainer'>
            <AdvertCard advertType="Найден" name="Котик" description="В Приморском районе напротив школы 583 вчера вечером" imgLink="https://i.pinimg.com/564x/b5/98/05/b5980553af4ff6f878108a13fef7aaf4.jpg"/>
            <AdvertCard advertType="Потерян" name="котек" description="В Приморском районе напротив школы 583 вчера вечером" imgLink="https://public.blenderkit.com/thumbnails/assets/0992088bfb844c69bb6e426272970c8b/files/thumbnail_c858218a-4afc-4e94-b6b9-080f5e6c7066.jpg.256x256_q85_crop-%2C.jpg"/>
            <AdvertCard advertType="Найден" name="кот" description="очень большой и пушистый" imgLink="https://i.pinimg.com/564x/b5/98/05/b5980553af4ff6f878108a13fef7aaf4.jpg"/>
          </div>
          <Subscribe_Form/>
        </main>
        
        <Footer/>
    </div>
  );
};

export default Main;
