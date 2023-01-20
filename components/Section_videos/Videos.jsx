import videos_style from "../../styles/SectionLearning/services_learning.module.css";
import Image from "next/image";
import Link from "next/link";

function Videos (props) {
    return(
        <div className={videos_style.box_video}>
         <div className={videos_style.video_img}>
             <Image 
             src='/IMG/20221116_124735.jpg'
             height={100}
             width={100}
             alt='Icono'
             />
         </div>
         <div className={videos_style.description_video}>
             <h2>
                 {props.title_video}
             </h2>
             <p>
                 {props.description}
             </p>
         </div>
        </div>
     )
 }
 
 export default Videos