// React Elements //
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

// componentes //
// Estilos //
import Info_style from "../../styles/SectionInfo/seccion_info.module.css";

// Librerias de funcionalidades //
import AOS from "aos";
import 'aos/dist/aos.css'




function TextContent(props) {
  //// Scroll_animation////
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const direccion = props.content_style;

  if (direccion === true) {
    return (
      <div data-aos={props.data_aos} className={Info_style.container_tex}>
        <div className={Info_style.container_section_text}>
          <div className={Info_style.container_tex_img}></div>
          <Image
            src={(`/IMG/Info_${props.num_img}.jpg`)}
            width={300}
            height={200}
            alt={props.nombre_img}
          ></Image>
        </div>

        <div className={Info_style.container_tex_c}>
          <h2>{props.titleInfo}</h2>
          <p>
            {props.Info}<br /><br />
            {props.Info_2}<br /><br />
            <Link target='_blank' href={(`${props.Link}`)}>
              {props.Link_name}
            </Link>
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div data-aos={props.data_aos} className={Info_style.container_tex_2}>
        <div className={Info_style.container_tex_c}>
          <h2>{props.titleInfo}</h2>
          <p>
            {props.Info}<br /><br />
            {props.Info_2}<br /><br />
            <Link target='_blank' href={(`${props.Link}`)}>
              {props.Link_name}
            </Link>
          </p>
        </div>
        <div className={Info_style.container_section_text}>
          <div className={Info_style.container_tex_img_d}></div>
          <Image
            src={(`/IMG/Info_${props.num_img}.jpg`)}
            width={300}
            height={200}
            alt={props.nombre_img}
          ></Image>
        </div>
      </div>
    )
  }




}

export default TextContent;
