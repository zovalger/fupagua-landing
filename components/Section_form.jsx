import style from "../styles/SectionForm/section_form.module.css";

export function Section_form() {
    return (

    <div className={style.form_container} id="contactame">
      <form action="start" className={style.form}>

        <div className={style.form_header}>
            <h2 className={style.form_title}> Contactanos </h2>
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
        <textarea id="mensaje" placeholder="Escriba aqui su mensaje" className={style.form_textarea}></textarea>
        
        <input type="submit" value="Enviar" className={style.btn_submit}></input>
        
      </form>

    </div>

    ); 
  }

export default Section_form;