import Info_style from "../styles/seccion_info.module.css";
import Link from "next/link";
import Image from "next/image";
import TextContent from "./Section_info/TextContent";

function Section_info(props) {
  return (

    <div className={Info_style.section_presentation}>
      
      <div className={Info_style.name_fun}>
        <div className={Info_style.container_img}></div>
        <div className={Info_style.vector_container}>
          <div className={Info_style.vector_1}></div>
        </div>
        <div className={Info_style.Logo_Info}></div>
        <div className= {Info_style.presentation}>
          <h2 href="">FUPAGUA</h2>
          <p>
            {props.contenido_headerI}
          </p>
        </div>
      </div>

      <TextContent 
      content_style = {true}
      num_img = '1'
      nombre_img = 'Imagen de prueba'
      titleInfo = 'Sobre nosotros'
      Info= 'Somos una fundación..'
      />

<TextContent 
      content_style = {false}
      num_img = '1'
      nombre_img = 'Imagen de prueba'
      titleInfo = 'Ubicación'
      Info= 'Estamos ubicados en ...'
      />

 <TextContent 
      content_style = {true}
      num_img = '1'
      nombre_img = 'Imagen de prueba'
      titleInfo = 'Nuestros servicios'
      Info= 'Ofrecemos ...'
      />
    

  </div>
  )
}

export default Section_info
