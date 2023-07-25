import React from "react";
import style from "../styles/_ideas.module.scss";

const Loading = () => {
  return (
    <>
      <div className={style.main_ideas_container}>
        {/*** <h1>Loading...</h1> */}

        <div className={style.loader}>
          <div className={style.container__animation}>
            <div className={style.animation__o}>
              <div className={style.animation__o_modifOne}></div>
            </div>
            <ul className={style.loader__ul}>
              <li className={style.loader__li} id={style.loader__li_1}>
                L
              </li>
              <li className={style.loader__li} id={style.loader__li_2}>
                O
              </li>
              <li className={style.loader__li} id={style.loader__li_3}>
                A
              </li>
              <li className={style.loader__li} id={style.loader__li_4}>
                D
              </li>
              <li className={style.loader__li} id={style.loader__li_5}>
                I
              </li>
              <li className={style.loader__li} id={style.loader__li_6}>
                N
              </li>
              <li className={style.loader__li} id={style.loader__li_7}>
                G ...
              </li>
            </ul>
          </div>
          <div className={style.underline__loader__hot}></div>
          <div className={style.underline__loader}></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
