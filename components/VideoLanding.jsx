import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function VideoLanding(props, { boton }) {

  const Boton = props.boton
  return (
    <div className={style.bg_video}>
      <div className={style.container_text}>
        <h2 className={style.title}>
          Aprendizaje
        </h2>
        <p className={style.text}>
          En este apartado encontrarás diversos vídeos de interés tanto educativos,
          informativos entre otros, que ayudarán a construir y mejorar la inclusión.
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