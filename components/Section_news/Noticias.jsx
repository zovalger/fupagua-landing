import noticias_style from "../../styles/SectionNews/services_news.module.css";
import Image from "next/image";
import Link from "next/link";

function Noticias (props) {
    return(
        <div className={noticias_style.box_news}>
         <div className={noticias_style.service_img}>
             <Image 
             src='/IMG/Libro.png'
             height={100}
             width={100}
             alt='Icono'
             />
         </div>
         <div className={noticias_style.description_news}>
             <h2>
                 {props.title_news}
             </h2>
             <p>
                 {props.description_news}
             </p>
         </div>
        </div>
     )
 }
 
 export default Noticias