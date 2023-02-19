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


      </div>

    </Layout>

  );
}


function Video(){
  return(
    <div className={style.container__video}>
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className={style.video}>
          <iframe
            src={
              url
                ? `https://www.youtube.com/embed/${formateUrl()}`
                : "https://www.youtube.com/embed/dWFBlfZSkak"
            }
            title="YouTube video player"
          ></iframe>
        </div>
      </div>

      <div className="col-lg-8 col-sm-12">
        <div className="p-2">
          <div>{title}</div>
          <div className="small">Link: {url}</div>
          <div className="small">Categoria: {categoryvideo.title}</div>
          <div className="small">Descripcion: {description}</div>
        </div>
      </div>
    </div>
  </div>
  )
}





export default GroupExample;