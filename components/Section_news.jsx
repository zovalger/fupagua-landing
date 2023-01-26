import News_style from "../styles/SectionNews/seccion_news.module.css";
import noticias_style from "../styles/SectionNews/services_news.module.css";
import Welcome_style from "../styles/welcome_style.module.css"
import Link from "next/link";
import Image from  "next/image";
import Noticias from "./Section_news/Noticias";


function Section_news(props) {
  return (

    <div className={News_style.section_news}>
      
      <div className={News_style.name_fun}>
        <div className={News_style.container_news}></div>
        <div className={News_style.vector_container}>
          <div className={News_style.vector_3}>
            <div className={Welcome_style.welcome_yellow}>
      
              <div className= {Welcome_style.welcome_content} id= "eventos">
                <h1 >Actividades</h1>
                  <p>                   
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    praesentium totam adipisci, odio ratione, vitae perferendis ullam
                    atque, tenetur neque ex minima fugiat dolore dicta tempora illo
                    debitis itaque assumenda!
                  </p>
              </div>
              <div className={News_style.news_Info}>
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
<div className={noticias_style.container_services} >
        <Noticias
        title_news = 'Evaluación Integral'
        description= 'Nuestro equipo interdisciplinario constituido por psicólogo, psicopedagogo, fisioterapeuta y terapista ocupacional y terapista de lenguaje evalúa al niño y establece el diagnostico para orientarle respecto a los programas de apoyo que le corresponden.'
          /> 
  </div>
  </div>
  )
}

export default Section_news
