import React from 'react';
import HomeLayout from "../layouts/HomeLayout";// @ts-ignore
import st from '../assets/scss/pages/index.module.scss'
import MainSlider from "../components/MainSlider";
import Categories from "../components/Categories";
import productsItems from '../assets/products.json'
import {IProduct} from "../interfaces/products";
import ProductItem from "../components/ProductItem";
import ProductLoader from "../components/ProductLoader";



const Index = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [activeCategoryIndex, setActiveCategoryIndex] = React.useState(0)

  const getAllProducts = async () => {
    setTimeout(()=>{
      console.log('work')
      setProducts(productsItems)
      setIsLoading(false)
    }, 3000)

  }

  React.useEffect(()=>{getAllProducts()}, [activeCategoryIndex])
  console.log(products)
  return (
    <HomeLayout>
      <MainSlider />
      <Categories activeIndex={activeCategoryIndex} setActiveIndex={(id)=>setActiveCategoryIndex(id)}/>
      <div className={st.mainWrapper}>

        {
          isLoading ? [...new Array(8)].map((v, i)=> <ProductLoader key={i}/>):
            products.map((item)=>(
              <ProductItem key={item.id}  {...item} />
            ))
        }

      </div>


    </HomeLayout>
  );
};

export default Index;

