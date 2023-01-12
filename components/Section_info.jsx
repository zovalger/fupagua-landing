import Info_style from "../styles/SectionInfo/seccion_info.module.css";
import services_style from "../styles/SectionInfo/services_info.module.css";
import Link from "next/link";
import Image from "next/image";
import TextContent from "./Section_info/TextContent";
import TextContentTwo from "./Section_info/TextContentTwo";
import Services from "./Section_info/Services";

function Section_info(props) {
  return (

    <div className={Info_style.section_presentation}>

      <div className={Info_style.name_fun}>
        <div className={Info_style.container_img}></div>
        <div className={Info_style.vector_container}>
          <div className={Info_style.vector_1}>
            <div className={Info_style.container_P}>
              <div className={Info_style.Logo_Info}>
                <Image
                  src='/Icons/Logo-Fupagua.png'
                  height={120}
                  width={100}
                  alt='Logo de la Fundación'
                />
              </div>
              <div className={Info_style.presentation}>

                <p>
                  {props.contenido_headerI}
                </p>
              </div>
            </div>
          </div>

        </div>


      </div>
      <div id='sobre_nosotros'>
        <TextContent
          content_style={true}
          num_img='1'
          nombre_img='Imagen de prueba'
          titleInfo='Sobre nosotros'
          Info='FUPAGUA, Fundación de personas autistas del Guárico es una fundación sin animo de lucro con personal dispuestos a trabajar por el bienestar, integración y una mejor calidad de vida de las personas con Autismo y otros trastornos del desarrollo. Nuestro objetivo es atender a los niños y adolescentes con autismo de San Juan de los Morros y zonas adyacentes, en la búsqueda de su integración a la comunidad.'
        />
        <div className={Info_style.Container_working_hours}>
          <div className={Info_style.Img_hours}>
            <h2>Horario Laboral</h2>
            <Image
              src={(`/IMG/Info_2.png`)}
              width={600}
              height={400}
              alt={props.nombre_img}
            ></ Image>
          </div>
          <div className={Info_style.Text_hours}>
            <p>Nuestro horario laboral es de Lunes a Viernes. Trabajamos desde las 8:00 Am hasta las 12:00 Pm y de 1:00 Pm a 4:00 PM.</p>
          </div>
        </div>
        <TextContent
          content_style={false}
          num_img='1'
          nombre_img='Imagen de prueba'
          titleInfo='Origenes de FUPAGUA'
          Info='Surge entre un pequeño grupo de padres, familiares y profesionales, dispuestos a trabajar por el bienestar Autismo y otros trastornos del desarrollo, que se veían en la necesidad de trasladarse a las ciudades de Caracas y/o Maracay en busca de ayuda para sus hijos.'
          Info_2='El esfuerzo comienza a ver sus frutos el cuatro de noviembre de mil novecientos noventa y siete, cuando nace como una fundación sin fines de lucro, bajo la tutela de la señora María Antonieta Nuzzo; es entonces cuando comienzan las conversaciones con el Ministerio de Infraestructura y se consigue la sede en calidad de comodato para abrir sus puertas casi un año después, un dieciséis de Octubre como Centro de Diagnóstico y Tratamiento “Lcda. Nora Díaz”.'
        />
        <TextContentTwo
        content_style={true}
        titleInfo='¿Donde nos ubicamos?'
        Info='Estamos ubicados en la Urb. Rómulos gallegos. Av principal, sector al lado de Hidro Páez.'
        Link='https://goo.gl/maps/R74jdScH687DfmTD8'
        Link_name='Ubicanos en Google Map'
      />
      </div>
      <div id="servicios">
        <TextContent
          content_style={false}
          num_img='1'
          nombre_img='Imagen de prueba'
          titleInfo='Nuestros servicios'
          Info='Ofrecemos ...'
        />
      </div>
      <div id="modal_services"></div>
      <div className={services_style.container_services}>
        <Services
          num_img='1'
          title_service='Evaluación Integral'
          description='Nuestro equipo interdisciplinario constituido por psicólogo, psicopedagogo, fisioterapeuta y terapista ocupacional y terapista de lenguaje evalúa al niño y establece el diagnostico para orientarle respecto a los programas de apoyo que le corresponden.'
        />
        <Services
          num_img='2'
          title_service='Psicopedagogía'
          description='Ofrecemos tratamiento de los problemas de aprendizaje.'

        />
        <Services
          num_img='3'
          title_service='Terapia del Lenguaje'
          description='Nos encargamos de la prevención y la rehabilitación de las alteraciones en las diversas áreas de la comunicación: lenguaje, audición, voz y habla.'

        />
        <Services
          num_img='3'
          title_service='Fisioterapia'
          description='Prevención, habilitación y rehabilitación de las alteraciones en las áreas motoras, mediante la aplicación de tratamientos a través de medios físicos y ejercicios terapéuticos.'

        />
        <Services
          num_img='3'
          title_service='Terapia ocupacional'
          description='Promovemos la participación eficaz y satisfactoria en actividades significativas del diario vivir en personas con o sin discapacidad, mediante la prevención, habilitación y rehabilitación de los procesos comprometidos.'

        />
        <Services
          num_img='3'
          title_service='Intervención conductual'
          description='Enseñamos a las personas involucradas con niños que presentan excesos conductuales, un conjunto de técnicas basadas en los principios del aprendizaje y de la psicología cognitiva en forma teórica y practica.'

        />
        <Services
          num_img='3'
          title_service='Entrenamiento de destrezas sociales'
          description='Ayudamos a desarrollar en los niños las habilidades sociales necesarias para el funcionamiento efectivo en los diferentes ambientes sociales, a través del juego y actividades de la vida diaria.'
 
        />
        <Services
          num_img='3'
          title_service='Actividades dirigidas'
          description='Hacemos actividades dirigidas en su modalidad individual o pequeños grupos, dependiendo de las necesidades, funcionamiento intelectual y pedagógico del niño, ofrece una programación que abarca el aspecto pedagógico y brinda orientación sobre hábitos de trabajo, métodos de estudio, destrezas de participación en grupo, terapia de lenguaje y actividades recreativas.'

        />
        <Services
          num_img='3'
          title_service='Asesoría'
          description='Hacemos asesoría a docentes e instituciones educativas en el proceso de integración escolar de alumnos con trastornos del desarrollo; así como servicio de asesoramiento a personas interesadas en el estudio del Espectro Autista.'

        />

      </div>

    </div>
  )
}

export default Section_info
