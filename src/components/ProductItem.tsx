import React from 'react';
import {IProduct} from "../interfaces/products";
import {ROUT_PREFIX} from "../utils/routs";
import st from '../assets/scss/components/ProductItem.module.scss'
import RatingStar from "./RatingStar";
import optimizeText from "../utils/optimizeText";

const ProductItem:React.FC<IProduct> = (props) => {
  return (
    <div className={st.wrapper}>
      <img
        className={st.imgBlock}
        src={`${ROUT_PREFIX}${props.img}`}
        width="200"
        height="120"
        alt="Product"
      />
      <div className={st.watchYet}>
        {`Просмотрели:${props.watch}`}
      </div>
      <div className={st.textBlock}>
        <div className={st.headTextBlock}>
          <h4 className={st.productTitle} >{optimizeText(props.title, 6)}</h4>
          <div className={st.info}>
            <div className={st.emoji}>
              {props.online ?
                <span>🔴</span>:
                <span>⚪</span>
              }
            </div>
            <div className={st.rating}>
              <RatingStar value={props.rating}/>
            </div>
          </div>
        </div>
        <div className={st.textDesc}>
          {optimizeText(props.description, 10)}
        </div>

      </div>
    </div>
  );
};

export default ProductItem;
