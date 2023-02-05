import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

function SliderHeader_V2() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/IMG/frontFupaguaImg.jpg'}
          alt="First slide"
          width={800}
          height={800}
        />
        <Carousel.Caption>
            <Image
            src={'/Icons/Logo-Fupagua.png'}
            width={200}
            height={200}
            alt='FUPAGUA_logo'
            />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={'/IMG/Info_1.jpg'}
          alt="First slide"
          width={800}
          height={800}
        />
        <Carousel.Caption>
            <Image
            src={'/Icons/Logo-Fupagua.png'}
            width={200}
            height={200}
            alt='FUPAGUA_logo'
            />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHeader_V2;