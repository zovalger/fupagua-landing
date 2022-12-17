import Info_style from "../styles/SectionInfo/seccion_info.module.css";
import services_style from "../styles/SectionInfo/services_info.module.css";
import Link from "next/link";
import Image from "next/image";
import TextContent from "./Section_info/TextContent";
import Services from "./Section_info/Services";


function Section_info(props) {
  return (

    <div className={Info_style.section_presentation}>
      
      <div className={Info_style.name_fun}>
        <div className={Info_style.container_img}></div>
        <div className={Info_style.vector_container}>
          <div className={Info_style.vector_1}>
            <div className={Info_style.container_P}>
                <div className={Info_style.Logo_Info}>
                  <Image
                  src= '/Icons/Logo-Fupagua.png'
                  height={300}
                  width={280}
                  alt='Logo de la Fundación'
                  />
                </div>
                <div className= {Info_style.presentation}>
          <h2 href="">FUPAGUA</h2>
          <p>
            {props.contenido_headerI}
          </p>
                </div>
            </div>
          </div>
          
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
      titleInfo = '¿Donde nos ubicamos?'
      Info= 'Estamos ubicados en la Urb. Rómulos gallegos. Av principal, sector al lado de Hidro Páez.'
      Link = 'https://goo.gl/maps/R74jdScH687DfmTD8'
      Link_name = 'Ubicanos en Google Map'
      />

      <TextContent 
      content_style = {true}
      num_img = '1'
      nombre_img = 'Imagen de prueba'
      titleInfo = 'Nuestros servicios'
      Info= 'Ofrecemos ...'
      />
      <div className={services_style.container_services}>
        <Services
        num_img = "1"
        title_service = "Tratamiento"
        description = "Hola mundo, esto es un texto de prueba para ver un ejemplo del diseño"
        />
         <Services
        num_img = "2"
        title_service = "Tratamiento"
        description = "Hola mundo, esto es un texto de prueba para ver un ejemplo del diseño"
        />
         <Services
        num_img = "3"
        title_service = "Tratamiento"
        description = "Hola mundo, esto es un texto de prueba para ver un ejemplo del diseño"
        />
         <Services
        num_img = "1"
        title_service = "Tratamiento"
        description = "Hola mundo, esto es un texto de prueba para ver un ejemplo del diseño"
        />
          <Services
        num_img = "1"
        title_service = "Tratamiento"
        description = "Hola mundo, esto es un texto de prueba para ver un ejemplo del diseño"
        />
          <Services
        num_img = "1"
        title_service = "Tratamiento"
        description = "Hola mundo, esto es un texto de prueba para ver un ejemplo del diseño"
        />
          <Services
        num_img = "1"
        title_service = "Tratamiento"
        description = "Hola mundo, esto es un texto de prueba para ver un ejemplo del diseño"
        />
      </div>

  </div>
  )
}

export default Section_info
