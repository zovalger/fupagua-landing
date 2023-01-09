import libros_style from "../../styles/SectionBook/services_book.module.css";
import Image from "next/image";
import Link from "next/link";

function Libros (props) {
    return(
        <div className={libros_style.box_video}>
         <div className={libros_style.service_img}>
             <Image 
             src={(`/Icons/Services/icon_${props.num_img}.svg`)}
             height={100}
             width={100}
             alt='Icono'
             />
         </div>
         <div className={libros_style.description_libros}>
             <h2>
                 {props.title_libro}
             </h2>
             <p>
                 {props.description}
             </p>
         </div>
        </div>
     )
 }
 
 export default Libros