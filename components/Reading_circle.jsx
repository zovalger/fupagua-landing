import style from "../styles/ReadingCircle/seccion_reading.module.css";

function Reading_circle() {
    return(
      <div className={style.reading_container}>
      
        <div className={style.reading_header}>
        <h1 className={style.reading_title}>Circulo de lectura</h1>
        </div>
        
        <div className={style.reading_content}>
          <div className={style.reading_section_1}>
            <h2 className={style.reading_subtitle}>¿Que es?</h2>
              <p className={style.reading_text}>
                es una actividad realizada cada ## en la fundacion donde Lorem ipsum, 
                dolor sit amet consectetur adipisicing elit. Dignissimo
              </p>
          </div>
          <div className={style.reading_section_2}>
          <h2 className={style.reading_subtitle}>Próximo</h2>
            <p className={style.reading_text}>Tema: Lorem ipsum, dolor sit amet consectetur</p>
            <p className={style.reading_text}>Dia: 00/00/0000</p>
          </div>
        </div>  
      </div>
    );
}

export default Reading_circle