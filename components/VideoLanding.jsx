import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function VideoLanding() {
  return (
 <div className={style.bg_video}>
  <div>
  <Image 
                src={"/img_banners/video_img.svg"}
                width={300}
                height={300}
                alt="videos_img"
                />
  </div>
  </div>
  );
}

export default VideoLanding;