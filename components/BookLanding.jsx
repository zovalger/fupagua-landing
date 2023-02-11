import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function BookLanding() {
  return (
    <div className={style.bg_book}>  
    <div className={style.container_text}> 
    <h2 className={style.title}> 
    Biblioteca. 
    </h2>
    <h2 className={style.subtitle}>{"Juana Milano de Díaz"}.</h2>
    <p className={style.text}> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
    praesentium totam adipisci, odio ratione, vitae perferendis ullam
    atque, tenetur neque ex minima fugiat dolore dicta tempora illo
    debitis itaque assumenda!
    </p> 
    <a href="biblioteca" className={style.button_book}>
      Ver catalogo
    </a> 
    </div>
    <div className={style.container_img}>
    <Image
    src={"/img_banners/library_img.svg"}
    alt="library_img"  
    className={style.img} 
    width={"400"}
    height={"400"} />
    </div>
    </div>
  );
}

export default BookLanding;