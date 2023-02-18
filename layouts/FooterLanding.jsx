import Image from "next/image";
import style from "../styles/FooterLanding/FooterLanding.module.css";
import Container from 'react-bootstrap/Container';

function FooterLanding() {
    return (   
  <div className={style.bg_foot}>
          <div className={style.icon_container}>
            <ul>
              <a>
                <li className={style.form_list_icon}>
                  <Image
                    src={("/logo-redes/facebook.svg")}
                    height={50}
                    width={50}
                    alt="facebook"
                    className={style.icon} /> hola
                </li>
              </a>
              <a>
                <li className={style.form_list_icon}>
                  <Image
                    src={("/logo-redes/instagram.svg")}
                    height={50}
                    width={50}
                    alt="instagram"
                    className={style.icon} />
                </li>
              </a>
              <a>
                <li className={style.form_list_icon}>
                  <Image
                    src={("/logo-redes/twitter.svg")}
                    height={50}
                    width={50}
                    alt="twitter"
                    className={style.icon} />
                </li>
              </a>
              <a>
                <li className={style.form_list_icon}>
                  <Image
                    src={("/logo-redes/whatsapp.svg")}
                    height={50}
                    width={50}
                    alt="whatsapp"
                    className={style.icon} />
                </li>
              </a>
            </ul>
          </div>

        </div>
    );
  }
  
  export default FooterLanding;

