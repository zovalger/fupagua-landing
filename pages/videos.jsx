import Layout from "../layouts/Layout";
import VideoLanding from "../components/VideoLanding";
import Carousel from 'react-bootstrap/Carousel';

import style from '../styles/Videos/videos.module.css'

function GroupExample() {
  return (

    <Layout title="Videos">
      <div className={style.container}>
      <VideoLanding
        buton={false}
      />

        <div className={style.container__header}>
          <h2>Videos de aprendizaje</h2>
        </div>


      <Carousel wrap={true}>

        <Carousel.Item> {/* recorrido de items*/}
         

          <iframe className={style.video} width={160} height={115} src="https://www.youtube.com/embed/17ntdUP5-Do" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

         

          <Carousel.Caption>
           
          </Carousel.Caption>

        </Carousel.Item>


      </Carousel>

      </div>

    </Layout>

  );
}

export default GroupExample;