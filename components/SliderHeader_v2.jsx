import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

function SliderHeader_V2() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/IMG/1.jpg'}
          alt="First slide"
          width={600}
          height={600}
        />
        <Carousel.Caption>
            <Image
            src={'/Icons/logo.jpg'}
            width={300}
            height={300}
            alt='FUPAGUA_logo'
            />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/IMG/2.jpg'}
          alt="First slide"
          width={600}
          height={600}
        />
        <Carousel.Caption>
            <Image
            src={'/Icons/logo.jpg'}
            width={300}
            height={300}
            alt='FUPAGUA_logo'
            />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHeader_V2;