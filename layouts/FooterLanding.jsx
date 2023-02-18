import Image from "next/image";
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
            <p>Nosotros</p>
            <p>Contacto</p>
        </div>
        <div className={style.box}>
            <h2>SIGUENOS</h2>
            <div className={style.red}>
                <a href="#" className="facebook">
                <Image
                    src={("/logo-redes/facebook.svg")}
                    height={20}
                    width={20}
                    alt="facebook"
                    />
                </a>
                <a href="#" className="twitter">
                <Image
                    src={("/logo-redes/twitter.svg")}
                    height={20}
                    width={20}
                    alt="twitter"
                    />
                </a>
                <a href="#" className="instagram">
                <Image
                    src={("/logo-redes/instagram.svg")}
                    height={20}
                    width={20}
                    alt="instagram"
                    /> 
                </a>
                <a href="#" className="whatsapp">
                <Image
                    src={("/logo-redes/whatsapp.svg")}
                    height={20}
                    width={20}
                    alt="whatsapp"
                    />
                </a>
                <a href="#" className="telegram">
                <Image
                    src={("/logo-redes/telegram.svg")}
                    height={20}
                    width={20}
                    alt="telegram"
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