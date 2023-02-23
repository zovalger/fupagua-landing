import Layout from "../layouts/Layout";
import VideoLanding from "../components/VideoLanding";
import Carousel from 'react-bootstrap/Carousel';

import style from '../styles/Videos/videos.module.css'
import { getAllVideoLinks } from "../controllers/videolink.controller";

function GroupExample( {videolinkGroups}) {
  return (

    <Layout title="Videos">
      <div className={style.container}>
      <VideoLanding
        buton={false}
      />

        <div className={style.container__header}>
          <h2>Videos de aprendizaje</h2>
        </div>

          <div>

          {videolinkGroups.map(({_id})=>{
            <div key={_id}> 
              {videolinkGroups.map(({registros})=>
              <div key={registros}>
              <Video
              url = {registros.url} 
              title = {registros.title} 
              description = {registros.description} 
              />
              </div>
              )}
            </div>
          })}

          </div>
      </div>

    </Layout>

  );
}


function Video(props,{url},{description}, {title}){
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






export async function getServerSideProps(context) {
   let videolinkGroups = []

	try {
		
    videolinkGroups = await  getAllVideoLinks()
	} catch (error) {
		console.log(error);
	}


  console.log( videolinkGroups);
	return {
		props: {
			videolinkGroups:videolinkGroups || [],
		},
	};
}
