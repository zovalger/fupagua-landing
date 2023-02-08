// React/Next
import Image from 'next/image';

// CSS

import style from '../styles/InfoLanding/Info.module.css';

import styleService from '../styles/InfoLanding/Services.module.css';

// Librerias


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function InfoLanding(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
    

    return(

        <div className={style.container}>

            <h2>Información</h2>

            <div className={style.container__info}>

                    <div className={style.container__img}>

                        <Image 
                        src={'/IMG/info_1.jpg'}
                        width={600}
                        height={600}
                        alt="FUPAGUA"
                        loading='lazy'
                        />

                    </div>

                    <div className={style.container__text}>

                        <p>
                            FUPAGUA, <strong>{"Fundación de personas autistas del estado Guárico"}</strong>, 
                            es una fundación sin animo de lucro con personal dispuestos a trabajar por el bienestar, 
                            integración y una mejor calidad de vida de las personas con Autismo y otros transtornos del desarrollo.<br /><br />
                            Nuestro objetivo es atender a los niños y adolescentes con autismo de San Juan de los Morros y zonas
                            adyacentes, en la busqueda de su integración a la comunidad.
                        </p>

                    </div>

            </div>


           {/* Horario Laboral */}

            <div className={style.container__info}>

                <div className={style.container__img}>

                    <Image 
                    src={'/IMG/Info_2.png'}
                    width={600}
                    height={600}
                    alt="FUPAGUA"
                    loading='lazy'
                    />

                </div>

                <div className={style.container__text}>

                    <p>Nuestro horario laboral es de Lunes a Viernes.</p><br />
                    <p>Trabajamos desde las 8:00 AM hasta la 12:00 PM y de 1:00 PM a 4:00 PM</p>

                </div>

            </div>


            {/* Mapa Fupagua */}

            <div className={style.container__info}>

                    <div className={style.container__img}>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1691.3044357309557!2d-67.372931!3d9.919639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2aa93824029f4d%3A0x9a77658cc988e299!2sFEDE%20-%20GUARICO%20(Fundaci%C3%B3n%20de%20Edificaciones%20Educativa)!5e1!3m2!1ses!2sve!4v1675731124734!5m2!1ses!2sve" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    
                    
                    </div>

                    <div className={style.container__text}>

                        <p>Estamos ubicados en la Urb.Rómulos gallegos. Av.principal, sector al lado de Hidro Páez.</p>
                        
                     

                    </div>

            </div>      

            <div className={styleService.container}>
                	<h2>Servicios</h2>

					<Carousel responsive={responsive}>

                            <div>item 1</div>
                            <div>item 2</div>
                            <div>item 3</div>

                     </Carousel>

					</div>
                    <Carousel responsive={responsive}>

                        <div>item 1</div>
                        <div>item 2</div>
                        <div>item 3</div>

                    </Carousel>

        </div>

    )
}


//Servicios
function Services(props){
    return(

                <div className={styleService.container__service}>

                    <div className={styleService.container__img}>
                        <button>
                            {/*insert image*/ /*cloudynary*/}
                        </button>
                    </div>

                    <div className={styleService.container__text}>
                        <h2>{props.titulo}</h2> {/*De la base de datos*/}
                    </div>

                </div>
           

    )
}

//Modal de los servicios

