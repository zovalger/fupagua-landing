import Image from "next/image";
import style from "../styles/BannerLanding/BannerLanding.module.css";

function BookLanding(props, {boton}) {
  return (
    <div className={style.bg_book}>  
    <div className={style.container_text}> 
    <h2 className={style.title}> 
    Biblioteca
    </h2>
    <h2 className={style.subtitle}>{`"Juana Milano de Díaz"`}</h2>
    <p className={style.text}> 
    En FUPAGUA contamos con una gran variedad de contenido 
    informativo en donde se muestran diversas imprentas y audiolibros 
    de interés, en esta sección se pueden visualizar recomendaciones 
    de la biblioteca con todo su catálogo disponible.
    </p> 
    {props.boton ? <a href="biblioteca" className={style.button_book}>
      Ver catálogo
    </a>  : <div></div>}
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