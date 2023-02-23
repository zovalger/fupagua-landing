import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function VideoLanding(props, { boton }) {

  return (
    <div className={style.bg_video}>
      <div className={style.container_text}>
        <h2 className={style.title}>
          Aprendizaje
        </h2>
        <p className={style.text}>
        En FUPAGUA se exponen diversos medios audiovisuales educativos que permitirán adquirir 
        herramientas y acelerar el aprendizaje del público, para ayudar a mejorar las 
        capacidades pedagógicas de los egresados y darles un apoyo a su conocimiento e
        integración social e intelectual.
        </p>
        {props.boton ?<a href="videos" className={style.button_video}>
          Ver videos
        </a> : <div></div>}
      </div>
      <div className={style.container_img}>
        <Image
          src={"/img_banners/video_img.svg"}
          alt="video_img"
          className={style.img}
          width={"400"}
          height={"400"}
        />
      </div>
    </div>
  );
}

export default VideoLanding;