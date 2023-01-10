import Info_style from "../styles/SectionNews/seccion_news.module.css";
import videos_style from "../styles/SectionNews/services_news.module.css";
import Link from "next/link";
import Image from "next/image";

import Noticias from "./Section_videos/Videos";


function Section_news(props) {
  return (

    <div className={Info_style.section_news}>
      
      <div className={Info_style.name_fun}>
        <div className={Info_style.container_news}></div>
        <div className={Info_style.vector_container}>
          <div className={Info_style.vector_3}>
            <div className={Info_style.welcome_yellow}>
      
              <div className= {Info_style.welcome_content} id= "videos">
                <h1 >Actividades</h1>
                  <p>                   
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    praesentium totam adipisci, odio ratione, vitae perferendis ullam
                    atque, tenetur neque ex minima fugiat dolore dicta tempora illo
                    debitis itaque assumenda!
                  </p>
              </div>
              <div className={Info_style.news_Info}>
                  <Image
                  src= {(`/IMG/stock.svg`)}
                  height={400}
                  width={300}
                  alt='imagen de learning'
                  />
                </div>
            </div>
          </div>
          
        </div>
      </div>
<div className="selector_video">

</div>

  </div>
  )
}

export default Section_news