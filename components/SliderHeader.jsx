import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import style from "../styles/SliderHeader/SliderHeader.module.css";

function SliderHeader() {
  return (
    <Carousel>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/Header/1.jpg'}
          alt="FUPAGUA"
          width={800}
          height={800}
          priority
          quality={40}
        />
       
        <Carousel.Caption>  
        <div className={style.container_img}>
        <Image
            className={style.logo}
            src={'/logo/logo_extended.svg'}
            width={"400"}
            height={"400"}
            alt='FUPAGUA_logo'
            priority
            quality={40}
            />
        </div>

          <div className={style.container_text}>
            <h3 className={style.title}>Bienvenido</h3>
          <p>{"Fundación de Personas Autistas del Guárico"}</p>
          </div>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/Header/2.jpg'}
          alt="FUPAGUA"
          width={800}
          height={800}
          priority
          quality={40}
        />

        <Carousel.Caption>
        <div className={style.container_img}>
            <Image
            className={style.logo}
            src={'/logo/logo_extended.svg'}
            width={"400"}
            height={"400"}
            alt='FUPAGUA_logo'
            quality={40}
            /> 
         </div>   

         <div className={style.container_text}>
            <h3 className={style.title}>Bienvenido</h3>
            <p>{"Fundación de Personas Autistas del Guárico"}</p>
        </div>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/Header/3.jpg'}
          alt="FUPAGUA"
          width={800}
          height={800}
          priority
          quality={40}
        />

        <Carousel.Caption>
        <div className={style.container_img}>
            <Image
            className={style.logo}
            src={'/logo/logo_extended.svg'}
            width={"400"}
            height={"400"}
            alt='FUPAGUA_logo'
            quality={40}
            /> 
         </div>   

         <div className={style.container_text}>
            <h3 className={style.title}>Bienvenido</h3>
            <p>{"Fundación de Personas Autistas del Guárico"}</p>
        </div>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/Header/4.jpg'}
          alt="FUPAGUA"
          width={800}
          height={800}
          priority
          quality={40}
        />

        <Carousel.Caption>
        <div className={style.container_img}>
            <Image
            className={style.logo}
            src={'/logo/logo_extended.svg'}
            width={"400"}
            height={"400"}
            alt='FUPAGUA_logo'
            quality={40}
            /> 
         </div>   

         <div className={style.container_text}>
            <h3 className={style.title}>Bienvenido</h3>
            <p>{"Fundación de Personas Autistas del Guárico"}</p>
        </div>
        </Carousel.Caption>

      </Carousel.Item>
      
    </Carousel>
  );
}

export default SliderHeader;