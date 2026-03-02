import React from 'react';

import st from '../assets/scss/components/Categories.module.scss'
import {ICategories, ICategoryProps} from "../interfaces/categories";
import categories from "../assets/categories.json";

const Categories:React.FC<ICategoryProps> = ({activeIndex, setActiveIndex}) => {
  const categoriesList:ICategories[] = [
    {
      id: 0,
      title: "Все"
    },
    ...categories
  ];
  console.log(activeIndex, activeIndex)
  return (
    <div className={st.wrapper}>
      <ul className={st.categoryList}>
        {categoriesList.map(val=>(
          <li className={activeIndex==val.id?st.active:''} key={val.id} onClick={()=>setActiveIndex(val.id)}>
            <button type="button">{val.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
