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
          loading='lazy'
        />
        <Carousel.Caption>
        <Image
            src={'/Icons/Logo-Fupagua.png'}
            width={200}
            height={200}
            alt='FUPAGUA_logo'
            loading='lazy'
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
          loading='lazy'
        />
        <Carousel.Caption>
            <Image
            src={'/Icons/Logo-Fupagua.png'}
            width={200}
            height={200}
            alt='FUPAGUA_logo'
            loading='lazy'
            />
             <h2>Bienvenido</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHeader;