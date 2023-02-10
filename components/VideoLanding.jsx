import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function VideoLanding() {
  return (
    <div className={style.bg_video}>  
    <div className={style.container_text}> 
    <h2 className={style.title}> 
    Aprendizaje
    </h2>
    <p className={style.text}> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
    praesentium totam adipisci, odio ratione, vitae perferendis ullam
    atque, tenetur neque ex minima fugiat dolore dicta tempora illo
    debitis itaque assumenda!
    </p> 
    <a href="videos" className={style.button_video}>
      Ver videos
    </a> 
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