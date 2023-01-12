import noticias_style from "../../styles/SectionNews/services_news.module.css";
import swiper_style from "../../styles/SectionNews/seccion_news.module.css";
import Image from "next/image";
import Link from "next/link";

function Noticias (props) {
    return(
    <div className={noticias_style.box_news} swiper_slide>
       
            <div className={noticias_style.description_news}>
             <h2>
                 {props.title_news}
             </h2>
                 <p>
                 {props.description}
                </p>
            </div>
    </div>
     )
 }
 
 export default Noticias