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



 function InfoLanding({ fupaguaServices }){



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
                            es una fundación sin ánimo de lucro con personal dispuestos a trabajar por el bienestar, 
                            integración y una mejor calidad de vida de las personas con Autismo y otros trastornos del desarrollo.<br /><br />
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

            {/* Más sobre FUPAGUA */}

            <div className={style.container__infoTwo}>


            <div className={style.info}>         
                        <Image
                        src={'/logo/logo_centro.png'}
                        width={500}
                        height={500}
                        alt="Logo de centro"
                        loading='lazy'
                        className={style.info_img}
                        />
                        
                   <h2>Centro de Diagnóstico y Tratamiento {`"Lcda. Nora Díaz"`}</h2>
                 
                    <p>Se establecen conversaciones con el Ministerio de Infraestructura y se consigue la sede en calidad
                        de comodato para abrir sus puertas el 16/10/1998 como <strong>{`Centro de Diagnóstico y Tratamiento "Lcda. Nora Díaz".`}</strong> Nos hemos esforzado, conjuntamente con el Equipo de Integración {`"José Félix Ribas"`}, por la integración de los niños con autismo y/o discapacidad 
                        en general en escuelas regulares, con éxito; así mismo desde nuestros inicios hemos logrado la asistencia a diplomados, conferencia, 
                        talleres, seminarios a nivel nacional e internacional, y entrenamientos sucesivos en diferentes centros.
                    </p>
                </div>


                <div className={style.info}>         
                        <Image
                        src={'/logo/Logo.png'}
                        width={400}
                        height={500}
                        alt="Logo de FUPAGUA"
                        loading='lazy'
                        />

                    <h2>Misión</h2>
                    <p>Atender a infantes, niños, niñas y adolescentes que presenten condiciones del espectro autista
                        y otras discapacidades, con el propósito de promover que conjuntamente con sus familas puedan participar
                        como miembros activos de sus comunidades en función de sus habilidades y de su entorno, a través de la 
                        difusión del síndrome y discapacidad en general, de la educación investigación científica relacionada con 
                        el espectro autista, y del trabajo conjunto de diferentes actores sociales en pro del fortalecimiento de sus
                        capacidades y la búsqueda de oportunidades para el goce y disfrute de sus derechos.
                    </p>
                </div>

                <div className={style.info}>
                <Image
                    src={'/logo/Logo.png'}
                    width={200}
                    height={200}
                    alt="Logo de FUPAGUA"
                    loading='lazy'
                    />
                     <h2>Visión</h2>
                    <p>Ser una fundación con espiritu social consolidada, que involucre a diferentes actores que reconozcan,
                        respeten, y defiendan los derechos de niños, niñas, adolescentes y adultos que presenten condiciones dentro
                        del espectro autista y otras discapacidades, en la búsqueda de su efectiva y eficaz integración a la 
                        comunidad donde se desenvuelven.
                    </p>
                    
                </div>
                
                <div className={style.info}>
                <Image
                    src={'/logo/Logo.png'}
                    width={200}
                    height={200}
                    alt="Logo de FUPAGUA"
                    loading='lazy'
                    />
                     <h2>Valores</h2>
                     <ul>
                        <li>Compromiso.</li>
                        <li>Cooperación.</li>
                        <li>Justicia.</li>
                        <li>Equidad.</li>
                        <li>Fraternidad.</li>
                        <li>Solidaridad social.</li>
                        <li>Participación.</li>
                        <li>Trascendencia.</li>
                        <li>Integración.</li>
                        <li>Empatía.</li>
                        <li>Responsabilidad.</li>
                        <li>Tolerancia.</li>
                     </ul>
                 </div>



            </div>

            {/*Servicios*/}

            <div className={styleService.container}>
                	<h2 className={styleService.text_services}>Nuestros servicios</h2> 


               
                    <Carousel 
                    containerClass="carousel-container"
                    ssr={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-20-px"
                    responsive={responsive}
                    infinite={true}
                    >

                            {fupaguaServices.map((service, index1)=>{
                                            return(
                    
                                                <Services
                                                key={index1}
                                                data={service}
                                                />

                                            )
                        })}

                      
                     </Carousel>
                   
                 
        
			</div>


        </div>

    )
}


//Servicios
function Services( { data } ){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id, title, description, img , empleados } = data;
    console.log(empleados)
    return(
            <>
                <div className={styleService.container__service}>

                    <div className={styleService.container__img}>
                        <button variant="primary" onClick={handleShow}>
                            <Image
                            src={img}
                            width={200}
                            height={200}
                            alt="Imagen del servicio"
                            loading='lazy'
                            />
                        </button>
                    </div>

                    <div className={styleService.container__text}>
                        <h2>{title}</h2> {/*De la base de datos*/}
                    </div>

                </div>

                        <Modal show={show} onHide={handleClose}
                        size="lg"
                        >
                
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className={styleModal.title}> 
                            <div className={styleModal.title__img}>
                                <Image 
                                src={'/logo/logo_centro.png'}
                                height={500}
                                width={500}
                                alt="Logo de centro"
                                loading='lazy'
                                />
                            </div>

                            <div className={styleModal.title__text}>
                                <h2>{title}</h2>
                            </div>
                        </div>
                        </Modal.Title> 
                </Modal.Header>

                <Modal.Body>


                    
                    <div className={styleModal.container}>

                        <div className={styleModal.container__serviceInfo}>
                            <p>{description}</p> {/*Heredar la descripción acerca del servicio*/}
                        </div>

                        {empleados.map((id, index2)=>{
                          
                            return(
                               <div key={index2}>
                                <div className = {styleModal.container__card}>

                                <div className={styleModal.container__header}> 
    
                                    <div className={styleModal.container__img}>
    
                                        <Image
                                        src={id.img} 
                                        width={400}
                                        height={400}
                                        alt='Foto de perfil'
                                        loading='lazy'
                                        />
    
                                    </div>
    
                                    <div className={styleModal.container__headerText}>
    
                                        <h2>{id.name}</h2>
    
                                        <p><strong>FPV:</strong> {id.FPV}</p>
                
                                        <p><strong>Correo:</strong> {id.email}</p>
    
    
                                    </div>
    
                                </div>
    
                                <div className={styleModal.container__description}>
                                    {id.description ? <h3>Más información</h3> : <h3></h3>}
                                    <p>{id.description}</p>
                                </div>
    
                            </div>
                            </div>
    
                            )
                        })}
                       
                

                    </div>
                    

                </Modal.Body>
                
            </Modal>
            </>
           

    )
}

export default InfoLanding