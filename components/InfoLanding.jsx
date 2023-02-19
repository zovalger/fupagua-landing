// React/Next
import Image from 'next/image';
import React, { useState } from 'react';

// CSS

import style from '../styles/InfoLanding/Info.module.css';

import styleService from '../styles/InfoLanding/Services.module.css';

import styleModal from '../styles/InfoLanding/Modal.module.css';

// Librerias

//React-multi-carousel//
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


//Bootstrap//
   
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//Componentes//



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

            <h2>Sobre nosotros</h2>

            <div className={style.container__info}>

                    <div className={style.container__img}>

                        <Image 
                        src={'/IMG/info_1.jpg'}
                        width={600}
                        height={600}
                        alt="FUPAGUA"
                        loading='lazy'
                        quality={40}
                        />

                    </div>

                    <div className={style.container__text}>

                        <p>
                            FUPAGUA, <strong>{`"Fundación de personas autistas del estado Guárico"`}</strong>, 
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
                    className={style.horario}
                    src={'/IMG/Info_2.png'}
                    width={600}
                    height={600}
                    alt="FUPAGUA"
                    loading='lazy'
                    quality={40}
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

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.6110416648507!2d-67.3729159!3d9.919428800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2aa9a9cfbae69b%3A0x5fabae70ea22b923!2sFundaci%C3%B3n%20de%20personas%20autistas%20del%20Gu%C3%A1rico%20FUPAGUA!5e1!3m2!1ses-419!2sve!4v1676488856074!5m2!1ses-419!2sve" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                    
                        
                    </div>

                    <div className={style.container__text}>

                        <p>Estamos ubicados en la Urb.Rómulos gallegos. Av.principal, sector al lado de Hidro Páez.</p>
                        
                     

                    </div>

            </div>      


            {/*Servicios*/}

            <div className={styleService.container}>
                	<h2>Servicios</h2>
                    <Carousel 
                    containerClass="carousel-container"
                    ssr={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-20-px"
                    responsive={responsive}
                    infinite={true}
                    >

                        <Services 
                        titulo="Fisioterapia"
                        tituloModal="Fisioterapia"
                        nombre="Lucas Perez"
                        contenido="El primero es de los mejores"
                        telefono="0416-000000"
                        correo="prueba@gmail.com"
                        entrada="8:00 AM"
                        salida="4:00 PM"
                        />
                        <Services 
                        titulo="titulo prueba"
                        tituloModal="titulo de prueba"
                        contenido="Es la segunda vez que me abres"
                        />
                        <Services 
                        titulo="Terapia"
                        tituloModal="Terapia"
                        contenido="Solo queda uno para el final"
                        />
                        <Services 
                        titulo="Terapia del habla"
                        tituloModal="Terapia del habla"
                        contenido="El ultimo es de los mejores"
                        />

                      
                     </Carousel>

			</div>


        </div>

    )
}


//Servicios
function Services(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
            <>
                <div className={styleService.container__service}>

                    <div className={styleService.container__img}>
                        <button variant="primary" onClick={handleShow}>
                            {/*insert image*/ /*cloudynary*/}
                        </button>
                    </div>

                    <div className={styleService.container__text}>
                        <h2>{props.titulo}</h2> {/*De la base de datos*/}
                    </div>

                </div>

                        <Modal show={show} onHide={handleClose}
                        size="lg"
                        >
                
                <Modal.Header closeButton>
                    <Modal.Title>{props.tituloModal}</Modal.Title> {/*titulo del servicio*/}
                </Modal.Header>

                <Modal.Body>

                    <div className={styleModal.container}>

                        <div className={styleModal.container__serviceInfo}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quaerat sint. Vero tenetur, 
                                reiciendis nam rerum, non temporibus beatae cumque distinctio id soluta laborum maiores, voluptatibus ipsum. Odit, iste quia?</p> {/*Heredar la descripción acerca del servicio*/}
                        </div>

                        <div className = {styleModal.container__card}>

                            <div div className={styleModal.container__header}> 

                                <div className={styleModal.container__img}>

                                    <Image
                                    src={'/IMG/info_1.jpg'} 
                                    width={400}
                                    height={400}
                                    alt='Foto'
                                    loading='lazy'
                                    />

                                </div>

                                <div className={styleModal.container__headerText}>

                                    <h2>{props.nombre}</h2>

                                    <p><strong>FPV:</strong> {props.fpv}</p>
            
                                    <p><strong>Correo:</strong> {props.correo}</p>


                                </div>

                            </div>

                            <div className={styleModal.container__description}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita velit natus autem earum ea magni quasi, assumenda unde, reiciendis nobis officiis, dolore reprehenderit! Possimus delectus obcaecati incidunt nam, tempore beatae?</p>
                            </div>

                        </div>

                        <div className = {styleModal.container__card}>

                            <div div className={styleModal.container__header}> 

                                <div className={styleModal.container__img}>

                                    <Image
                                    src={'/IMG/info_1.jpg'}
                                    width={400}
                                    height={400}
                                    alt='Foto'
                                    />

                                </div>

                                <div className={styleModal.container__headerText}>

                                    <p>{props.contenido}</p>

                                </div>

                            </div>

                            <div className={styleModal.container__description}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita velit natus autem earum ea magni quasi, assumenda unde, reiciendis nobis officiis, dolore reprehenderit! Possimus delectus obcaecati incidunt nam, tempore beatae?</p>
                             </div>

                        </div>

                        <div className = {styleModal.container__card}>

                            <div div className={styleModal.container__header}> 

                                <div className={styleModal.container__img}>

                                    <Image
                                    src={'/IMG/info_1.jpg'}
                                    width={400}
                                    height={400}
                                    alt='Foto'
                                    />

                                </div>

                                <div className={styleModal.container__headerText}>

                                    <p>{props.contenido}</p>

                                </div>

                            </div>

                            <div className={styleModal.container__description}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita velit natus autem earum ea magni quasi, assumenda unde, reiciendis nobis officiis, dolore reprehenderit! Possimus delectus obcaecati incidunt nam, tempore beatae?</p>
                            </div>

                        </div>

                    </div>
                    

                </Modal.Body>
                
            </Modal>
            </>
           

    )
}
