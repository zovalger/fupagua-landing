import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function ActivityLanding() {
  return (
 <div className={style.bg_activity}>
  <div>
  <Image 
                src={"/img_banners/activity_img.svg"}
                width={300}
                height={300}
                alt="videos_img"
                />
  </div>
  </div>
  );
}

export default ActivityLanding;