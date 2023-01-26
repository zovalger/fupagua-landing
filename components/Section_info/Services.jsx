// React Elements //
import Image from "next/image";
import Link from "next/link"

// componentes //
import Modal from "./services_modal/Modal";

// Estilos //
import services_style from "../../styles/SectionInfo/services_info.module.css";
// Librerias de funcionalidades //






function Services(props){


    return(
       <div className={services_style.box_service}>
        <div className={services_style.service_img}>
            <Image 
            src={(`/Icons/Services/icon_${props.num_img}.svg`)}
            height={100}
            width={100}
            alt='Icono'
            />
        </div>
        <div className={services_style.description_service}>
            <h2>
                {props.title_service}
            </h2>
            <p>
                {props.description}
            </p>
        </div>
       </div>
    )
}

export default Services