import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function VideoLanding() {
  return (
<div className={style.bg_video}>  
  <div className={style.text}> 
  <strong> 
  <h2 className={style.title}> 
  Aprendizaje
  </h2>
  </strong>
  <p className={style.subtitle}> 
  lorem hdh hdh 
  </p> 
  </div>
  <div className={style.image}>
  <img 
                src="/img_banners/video_img.svg"
                alt="videos_img"  
                className="img" 
                width="400"
                height="400"
                />
  </div>
  </div>
  );
}

export default VideoLanding;