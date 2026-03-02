import React from 'react';
import st from "../assets/scss/components/MainSliderItem.module.scss"
import {Link} from "react-router-dom";
import {ROUT_PREFIX} from "../utils/routs";

interface IMainSliderItem {
  id: number;
  img: string;
  url: string;
  online: boolean;
  watchingNow: number;
}
const MainSliderItem:React.FC<IMainSliderItem> = (props) => {
  console.log(props)

  return (
    <div className={st.wrapper}>
      <img width="230" height="200" src={`${ROUT_PREFIX}${props.img}`} />
       <div className={st.emoji}>
         {props.online ?
           <span>🔴 LIVE</span>:
           <span>⚪ OFFLINE</span>
         }
       </div>

      <Link to={props.url} className={st.link}>
        <span className={st.linkText}>

          смотреть {"->"}
        </span>
      </Link>

    </div>
  );
};

export default MainSliderItem;
