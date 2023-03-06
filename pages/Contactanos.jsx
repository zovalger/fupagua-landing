import Image from "next/image";
import style from "../styles/FormLanding/FormLanding.module.css";
import Container from 'react-bootstrap/Container';
import Layout from "../layouts/Layout";
import NavLanding from "../layouts/NavLanding";
import emailjs from '@emailjs/browser';


function FormularioLanding() {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_5bw60h5', 'template_wxeh9ne', event.target, 'elkytiYvgDrTl-E_7')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    event.target.reset()
    window.location.replace('/');
  }

    return (   
<Layout title="Formulario">
  
      <header>
				<NavLanding />
			</header>
  <div className={style.bg_form}>
      
          <div className={style.container_form}>
            <form action="/" className={style.form} onSubmit={sendEmail}>

              <div className={style.form_header}>
                <b> <h2 className={style.title}> ¡Contáctanos! </h2> </b>
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
        <h4 className={style.subtitle_icon}>+58 4167392911</h4>
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
               <h4  className={style.subtitle_icon}>fupagua@gmail.com</h4>
        </div>
    </li>
    </div>
                </a>
                </div>
                <p className={style.form_text}> Envíanos un mensaje </p>
                <p className={style.form_text}> Pronto te atenderemos</p>
              </div>

              <label for="nombre" className={style.form_label}>Nombre</label>
              <input type="text" id="nombre" placeholder="Nombre" name="user_nombre" className={style.form_input} required></input>

              <label for="numero" className={style.form_label}>Numero de Teléfono</label>
              <input type="text" id="numero" placeholder="Teléfono" name="user_telefono" className={style.form_input} required></input>

              <label for="email" className={style.form_label}>Correo Electrónico</label>
              <input type="text" id="email" placeholder="E-Mail" name="user_email" className={style.form_input} required></input>

              <label for="mensaje" className={style.form_label}>Mensaje de texto</label>
              <textarea id="mensaje" placeholder="Escriba aqui su mensaje"  name="user_mensaje" className={style.form_textarea} required> </textarea>

              <div className ={style.button_align}>
              <button href="/" type="submit" value="Enviar" className={style.btn_submit}>Enviar</button>
              </div>

            </form>
          </div>
        </div>

        </Layout> 
    );
  }
  
  export default FormularioLanding;