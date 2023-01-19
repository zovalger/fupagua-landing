import Info_style from "../styles/SectionBook/seccion_book.module.css";
import libros_style from "../styles/SectionBook/services_book.module.css";
import Welcome_style from "../styles/welcome_style.module.css"
import Image from "next/image";
import Libros from "./Section_books/Libros";
import Section_reading from "../components/Reading_circle";


function Section_book(props) {
  return (

    <div className={Info_style.section_book}>
      
      <div className={Info_style.name_fun}>
        <div className={Info_style.container_book}></div>
        <div className={Info_style.vector_container}>
          <div className={Info_style.vector_3}>
          <div className={Welcome_style.welcome_yellow}>
      
            <div className= {Welcome_style.welcome_content} id='libros'>
                <h1 >Biblioteca</h1>
                <h2>"Nombre de la Biblioteca"</h2>
                  <p>                   
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    praesentium totam adipisci, odio ratione, vitae perferendis ullam
                    atque, tenetur neque ex minima fugiat dolore dicta tempora illo
                    debitis itaque assumenda!
                  </p>
                  <button className={Info_style.button_book}>Ver catalogo</button>
              </div>
              <div className={Info_style.libro_Info}>
                  <Image
                  src= {(`/IMG/biblioteca.svg`)}
                  height={360}
                  width={300}
                  alt='imagen de learning'
                  />
                </div>
            </div>
          </div>
          
        </div>
      </div>
      
    
      <div className={libros_style.container_services}>
        <Libros
        title_libro = 'Evaluación Integral'
        description = 'Nuestro equipo interdisciplinario constituido por psicólogo, psicopedagogo, fisioterapeuta y terapista ocupacional y terapista de lenguaje evalúa al niño y establece el diagnostico para orientarle respecto a los programas de apoyo que le corresponden.'
          />
         <Libros
        title_libro = 'Psicopedagogía'
        description = 'Ofrecemos tratamiento de los problemas de aprendizaje.'
          />
         <Libros
        title_libro = 'Terapia del Lenguaje'
        description = 'Nos encargamos de la prevención y la rehabilitación de las alteraciones en las diversas áreas de la comunicación: lenguaje, audición, voz y habla.'
          />
          <Libros
        title_libro = 'Fisioterapia'
        description = 'Prevención, habilitación y rehabilitación de las alteraciones en las áreas motoras, mediante la aplicación de tratamientos a través de medios físicos y ejercicios terapéuticos.'
         />
         <Libros
        title_libro = 'Terapia ocupacional'
        description = 'Promovemos la participación eficaz y satisfactoria en actividades significativas del diario vivir en personas con o sin discapacidad, mediante la prevención, habilitación y rehabilitación de los procesos comprometidos.'
         />
          <Libros
        title_libro = 'Intervención conductual'
        description = 'Enseñamos a las personas involucradas con niños que presentan excesos conductuales, un conjunto de técnicas basadas en los principios del aprendizaje y de la psicología cognitiva en forma teórica y practica.'
         />

      </div>
  </div>
  )
}

export default Section_book