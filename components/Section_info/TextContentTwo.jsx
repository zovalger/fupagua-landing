import Info_style_two from "../../styles/SectionInfo/seccion_info.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS  from "aos";
import 'aos/dist/aos.css'

function TextContentTwo(props) {

       //// Scroll_animation////
    useEffect(() =>{
         AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const direccion = props.content_style

    if (direccion === true) {
        return (
            <div data-aos= {props.data_aos} className={Info_style_two.container_tex}>
                <div className={Info_style_two.container_section_text}>
                    <div className={Info_style_two.container_tex_img}></div>
                    <iframe className={Info_style_two.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d381.886971783922!2d-67.3728359!3d9.9195075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2aa93824029f4d%3A0x9a77658cc988e299!2sFEDE%20-%20GUARICO%20(Fundaci%C3%B3n%20de%20Edificaciones%20Educativa)!5e1!3m2!1ses!2sve!4v1673389082142!5m2!1ses!2sve" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className={Info_style_two.container_tex_c}>
                    <h2>{props.titleInfo}</h2>
                    <p>
                        {props.Info}<br /><br />
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div data-aos= {props.data_aos} className={Info_style_two.container_tex_2}>
                <div className={Info_style_two.container_tex_c}>
                    <h2>{props.titleInfo}</h2>
                    <p>
                        {props.Info}<br /><br />
                        {props.Info_2}<br /><br />
                    </p>
                </div>
                <div className={Info_style_two.container_section_text}>
                    <div className={Info_style_two.container_tex_img_d}></div>
                    <iframe className={Info_style_two.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d381.886971783922!2d-67.3728359!3d9.9195075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2aa93824029f4d%3A0x9a77658cc988e299!2sFEDE%20-%20GUARICO%20(Fundaci%C3%B3n%20de%20Edificaciones%20Educativa)!5e1!3m2!1ses!2sve!4v1673389082142!5m2!1ses!2sve" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        )
    }




}

export default TextContentTwo;