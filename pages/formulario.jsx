import Image from "next/image";
import style from "../styles/FormLanding/FormLanding.module.css";
import Container from 'react-bootstrap/Container';
import Layout from "../layouts/Layout";
import NavLanding from "../layouts/NavLanding";


function FormularioLanding() {
    return (   
<Layout title="Formulario">
  
      <header>
				<NavLanding />
			</header>
  <div className={style.bg_form}>
      
          <div className={style.container_form}>
            <form action="start">

              <div className={style.form_header}>
                <h2 className={style.subtitle}> Contactanos </h2>
                <div className={style.icon_container}>
                <a>
    <div>
    <li className={style.form_list_icon}>
      <Image
        src={("/logo-redes/phone.svg")}
        height={60}
        width={60}
        alt="Telephone"
        className={style.icon} /> 
        <div className={style.text_icon}>
        <h4>+58414111000</h4>
        </div>
    </li>
    </div>
                </a>
                <a>
    <div>
    <li className={style.form_list_icon}>
      <Image
        src={("/logo-redes/at.svg")}
        height={60}
        width={60}
        alt="Email"
        className={style.icon} />
               <div className={style.text_icon}>
               <h4>Example@email.com</h4>
        </div>
    </li>
    </div>
                </a>
                </div>
                <p className={style.form_text}> Envianos un mensaje </p>
                <p className={style.form_text}> Pronto te atenderemos </p>
              </div>

              <label for="" className={style.form_label}>Nombre</label>
              <input type="text" id="nombre" placeholder="Nombre" className={style.form_input}></input>

              <label for="" className={style.form_label}>Numero de Teléfono</label>
              <input type="text" id="numero" placeholder="Teléfono" className={style.form_input}></input>

              <label for="" className={style.form_label}>Correo Electronico</label>
              <input type="text" id="email" placeholder="E-Mail" className={style.form_input}></input>

              <label for="" className={style.form_label}>Mensaje</label>
              <textarea id="mensaje" placeholder="          Escriba aqui su mensaje" className={style.form_textarea}> Escriba aquisu mensaje</textarea>

              <div className ={style.button_align}>
              <input type="submit" value="Enviar" className={style.btn_submit}></input>
              </div>

            </form>
          </div>
        </div>

        </Layout> 
    );
  }
  
  export default FormularioLanding;

  //          
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

