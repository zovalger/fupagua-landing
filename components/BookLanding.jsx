import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function BookLanding() {
  return (
 <div className={style.bg_book}>
  <div>
  <Image 
                src={"/img_banners/library_img.svg"}
                width={300}
                height={300}
                alt="videos_img"
                />
  </div>
  </div>
  );
}

export default BookLanding;