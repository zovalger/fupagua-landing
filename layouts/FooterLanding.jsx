import Image from "next/image";
import Link from "next/link";
import style from "../styles/FooterLanding/FooterLanding.module.css";

export function FooterLanding() {
  return (
  <div className={style.footer}>
    <div className={style.group_1}>
        <div className={style.box}>
            <figure>
                <a href="#">
                    <Image
                    width={200}
                    height={200}
                    src={("/logo/logo_extended.svg")}
                    alt="logo de FUPAGUA" />
                </a>
            </figure>
            
        </div>
        <div className={style.box}>
            <h2>SOBRE NOSOTROS</h2>
            <Link  href="/" className={style.link}>Nosotros.</Link>
            <Link  href="Contactanos" className={style.link}>Contáctanos.</Link>
        </div>
        <div className={style.box}>
            <h2>SIGUENOS</h2>
            <div className={style.red}>
                <a href="https://www.facebook.com/people/Fupagua/100066278966499/" className="facebook" target="_blank">
                <Image
                    src={("/logo-redes/facebook.svg")}
                    height={20}
                    width={20}
                    alt="facebook"
                    className="icon"
                    />
                </a>
                <a href="https://twitter.com/fupaguasjm?lang=es" className="twitter" target="_blank">
                <Image
                    src={("/logo-redes/twitter.svg")}
                    height={20}
                    width={20}
                    alt="twitter"
                    className="icon"
                    />
                </a>
                <a href="https://www.instagram.com/explore/tags/fupagua/top/" className="instagram" target="_blank">
                <Image
                    src={("/logo-redes/instagram.svg")}
                    height={20}
                    width={20}
                    alt="instagram"
                    className="icon"
                    /> 
                </a>
            </div>
        </div>
    </div>
    <div className={style.group_2}>
        <small>&copy; 2023 <b>FUPAGUA</b> - Todos los Derechos Reservados. </small>
    </div>
    </div>
  );
}
export default FooterLanding;