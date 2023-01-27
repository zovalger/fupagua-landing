import Info_style from "../styles/SectionLearning/seccion_learning.module.css";
import videos_style from "../styles/SectionLearning/services_learning.module.css";
import Link from "next/link";
import Image from "next/image";
import Welcome_style from "../styles/welcome_style.module.css"
import Videos from "./Section_videos/Videos";


function Section_learning(props) {
  return (

    <div className={Info_style.section_video}>
      
      <div className={Info_style.name_fun}>
        <div className={Info_style.container_video}></div>
        <div className={Info_style.vector_container}>
          <div className={Info_style.vector_2}>
          <div className={Welcome_style.welcome_red}>
      
             <div className= {Welcome_style.welcome_content} id= "videos">
                <h1 >Aprendizaje</h1>
                  <p>                   
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    praesentium totam adipisci, odio ratione, vitae perferendis ullam
                    atque, tenetur neque ex minima fugiat dolore dicta tempora illo
                    debitis itaque assumenda!
                  </p>
              </div>
              <div className={Info_style.video_Info}>
                  <Image
                  src= {(`/IMG/stock.svg`)}
                  height={460}
                  width={400}
                  alt='imagen de learning'
                  />
                </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className={Info_style.services}>
        <h2 className={Info_style.title_section}>¿Que deseas aprender?</h2>
        <div className={Info_style.tab}>
          <b>
            <a className={Info_style.tab_button_active} href="#general"> 
            Información general
            </a>
          </b> 
          <b>
          <a className={Info_style.tab_button} href="#tratamientos">
            Tratamientos
          </a>
          </b> 
          <b>
          <a className={Info_style.tab_button} href="#psicología_video">
            Psicología
          </a>
          </b>
         <b>
          <a className={Info_style.tab_button} href="#recomendaciones">
            Recomendaciones
          </a>
        </b>
        </div>
      </div>

<div className="selector_video">

</div>
    
      <div className={videos_style.container_services}>

        <Videos
        title_video = 'Evaluación Integral'
        description = 'Nuestro equipo interdisciplinario constituido por psicólogo, psicopedagogo, fisioterapeuta y terapista ocupacional y terapista de lenguaje evalúa al niño y establece el diagnostico para orientarle respecto a los programas de apoyo que le corresponden.'
          />
         <Videos
        title_video = 'Psicopedagogía'
        description = 'Ofrecemos tratamiento de los problemas de aprendizaje.'
          />
         <Videos
        title_video = 'Terapia del Lenguaje'
        description = 'Nos encargamos de la prevención y la rehabilitación de las alteraciones en las diversas áreas de la comunicación: lenguaje, audición, voz y habla.'
          />
          <Videos
        title_video = 'Fisioterapia'
        description = 'Prevención, habilitación y rehabilitación de las alteraciones en las áreas motoras, mediante la aplicación de tratamientos a través de medios físicos y ejercicios terapéuticos.'
         />
         <Videos
        title_video = 'Terapia ocupacional'
        description = 'Promovemos la participación eficaz y satisfactoria en actividades significativas del diario vivir en personas con o sin discapacidad, mediante la prevención, habilitación y rehabilitación de los procesos comprometidos.'
         />
          <Videos
        title_video = 'Intervención conductual'
        description = 'Enseñamos a las personas involucradas con niños que presentan excesos conductuales, un conjunto de técnicas basadas en los principios del aprendizaje y de la psicología cognitiva en forma teórica y practica.'
         />

      </div>
  </div>
  )
}

export default Section_learning