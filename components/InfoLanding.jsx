// React/Next
import Image from 'next/image';

// CSS

import style from '../styles/InfoLanding/Info.module.css'

export default function InfoLanding(){
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

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.5429019353846!2d-67.37264612954458!3d9.919661771995493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2aa93824029f4d%3A0x9a77658cc988e299!2sFEDE%20-%20GUARICO%20(Fundaci%C3%B3n%20de%20Edificaciones%20Educativa)!5e0!3m2!1ses!2sve!4v1675642361713!5m2!1ses!2sve" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className={style.container__text}>

                        <p>Estamos ubicados en la Urb.Rómulos gallegos. Av.principal, sector al lado de Hidro Páez.</p>
                        
                     

                    </div>

            </div>

            <Services />
        </div>

        // Mapa Fupagua

        
  
    )
}


function Services(props){
    return(
        <div>
            <h2>Servicios</h2>
            <div>
                <div>
                    <button>
                        {/*insert image*/}
                    </button>
                    <h2>{props.titulo}</h2>
                </div>
            </div>

        </div>
    )
}