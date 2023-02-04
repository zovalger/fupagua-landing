import style from "../styles/HeaderLanding/HeaderLanding.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

export function HeaderLanding() {
  //// Scroll_animation////
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  }, []);

  return (
    <div className={style.Logo_header} id="header">
      <div className={style.Font_header}>
        <Image 
        src={'/IMG/frontFupaguaImg.jpg'}
        width={800}
        height={800}
        alt= "FUPAGUA"
        loading="lazy"
        />
      </div>
      <div data-aos= 'fade-down' className={style.logo}>
        <Image
          src='/Icons/Logo-Fupagua.png'
          width={200}
          height={200}
          alt='Logo de Fupagua'
          loading="lazy"
        ></Image>
      </div>
      <nav className={style.nav_logo}>
        <ul>
          <li className={style.nav_item}>
            <Link href="#sobre_nosotros">
              Sobre nosotros
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="#servicios">
              Servicios
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="#videos">
              Aprendizaje
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="#libros">
              Nuestros Libros
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="#eventos">
              Eventos
            </Link>
          </li>

          <li className={style.nav_item}>
            <Link href="#contactame">
              Contactanos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderLanding;