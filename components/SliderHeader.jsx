import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";


function SliderHeader() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/IMG/frontFupaguaImg.jpg'}
          alt="FUPAGUA"
          width={800}
          height={800}
          priority
          quality={40}
        />
        <Carousel.Caption>
        <Image
            src={'/logo/logo_extended.svg'}
            width={200}
            height={200}
            alt='FUPAGUA_logo'
            priority
            quality={40}
            />
             <h2>Bienvenido</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/IMG/Info_1.jpg'}
          alt="FUPAGUA_2"
          width={800}
          height={800}
          priority
          quality={40}
        />
        <Carousel.Caption>
            <Image
            src={'/logo/logo_extended.svg'}
            width={200}
            height={200}
            alt='FUPAGUA_logo'
            priority
            quality={40}
            />
             <h2>Bienvenido</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHeader;