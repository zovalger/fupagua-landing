import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function ActivityLanding() {
  return (
 <div className={style.bg_activity}>  
  <div className={style.text}> 
  <strong> 
  <h2 className={style.title}> 
  Actividades 
  </h2>
  </strong>
  <p className={style.subtitle}> 
  lorem hdh hdh 
  </p> 
  </div>
  <div className={style.image}>
  <img 
                src="/img_banners/activity_img.svg"
                alt="noticias_img"  
                className="img" 
                width="400"
                height="400"
                />
  </div>
  </div>
  );
}

export default ActivityLanding;