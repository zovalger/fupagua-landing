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
  En FUPAGUA se están realizando constantes cambios para la mejora y facilitación de nuestros servicios. Aquí podrá consultar las actualizaciones de las actividades realizadas así como anuncios de próximos eventos.
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