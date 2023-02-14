import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function ActivityLanding() {
  return (
 <div className={style.bg_activity}>  
  <div className={style.container_text}> 
  <h2 className={style.title}> 
  Actividades. 
  </h2>
  <p className={style.text}> 
  Entérese de las últimas novedades de FUPAGUA, aquí podrá visualizar los últimos eventos realizados en 
  la fundación y mantenerse informado de cualquier actividad próxima.  
  </p> 
  </div>
  <div className={style.container_img}>
  <Image
  src={"/img_banners/activity_img.svg"}
  alt="activity_img"  
  className={style.img} 
  width={"400"}
  height={"400"}
                />
  </div>
  </div>
  );
}

export default ActivityLanding;