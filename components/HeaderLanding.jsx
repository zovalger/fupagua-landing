import style from "../styles/HeaderLanding/HeaderLanding.module.css";
import Link from "next/link";
import Image from "next/image";

export function HeaderLanding() {
	return (
		<div className={style.Logo_header} id="header">
      <div className={style.logo}>
		<Image 
		src='/Icons/Logo-Fupagua.png'
		width={200}
		height={200}
		alt='Logo de Fupagua'
		></Image>
      </div>
      <nav className={style.nav_logo}>
        <ul>
          <li className={style.nav_item}>
            <Link href="#sobre_nosotros" class="nav_link active-link">
              Sobre nosotros
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="#servicios" class="nav_link">
              Servicios
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="#videos" class="nav_link">
              Aprendizaje
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="#libros" class="nav_link">
              Nuestros Libros
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="#eventos" class="nav_link">
              Eventos
            </Link>
          </li>

          <li className={style.nav_item}>
            <Link href="#contactame" class="nav_link">
              Contactanos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
	);
}

export default HeaderLanding;