import Info_style from "../../styles/SectionInfo/seccion_info.module.css";
import Link from "next/link";
import Image from "next/image";


function TextContent(props) {
          
  const direccion = props. content_style
  
        if(direccion === true){
          return(
            <div className={Info_style.container_tex} id="sobre_nosotros">
              <div className={Info_style.container_section_text}>
              <div className={Info_style.container_tex_img}></div>
              <Image 
                src= {(`/IMG/Info_${props.num_img}.jpg`)}
                width={300}
                height={200}
                alt= {props.nombre_img}
                ></Image>
              </div>
              
              <div className={Info_style.container_tex_c}>
                  <h2>{props.titleInfo}</h2>
                  <p>
                      {props.Info}
                  </p>
                </div>
              </div>
            )
        } else {
          return(
            <div className={Info_style.container_tex_2}>
            <div className={Info_style.container_tex_c}>
              <h2>{props.titleInfo}</h2>
              <p>
              {props.Info}
              </p>
            </div>
            <div className={Info_style.container_section_text}>
              <div className={Info_style.container_tex_img_d}></div>
              <Image 
                src= {(`/IMG/Info_${props.num_img}.jpg`)}
                width={300}
                height={200}
                alt= {props.nombre_img}
                ></Image>
            </div>
          </div>
          )
        }

  
      
       
  }
  
  export default TextContent;
  