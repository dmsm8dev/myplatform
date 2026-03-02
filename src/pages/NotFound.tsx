import React from 'react';
import HomeLayout from "../layouts/HomeLayout";

const NotFound = () => {
  return (
  <HomeLayout>
    <div >
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p >
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  </HomeLayout>
  );
};

export default NotFound;
