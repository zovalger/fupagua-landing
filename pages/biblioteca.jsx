import Head from "next/head";
import Layout from "../layouts/Layout";
import Image from "next/image";

import BookLanding from "../components/BookLanding"


//React-multi-carousel//
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//CSS

import style from '../styles/Biblioteca/Biblioteca.module.css'
import styleL from '../styles/Biblioteca/LibrosR.module.css'

function GroupExample() {

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


  return (
    <Layout title="Biblioteca">
      <div className={style.container}> 
       <BookLanding 
         boton = {false}
        />
         {/*Libros recomendados*/}


          <div className={styleL.container}>

              <h2>Libros recomendados</h2>
              <Carousel 
              containerClass="carousel-container"
              ssr={true}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              responsive={responsive}
              infinite={true}
              >

                  <LibrosRecomendados />    
                  <LibrosRecomendados /> 
                  <LibrosRecomendados /> 
                  <LibrosRecomendados />  

                          
              </Carousel>
          </div>  


          {/*Catalogo de libros*/}

          <div className={style.container__catalogo}>
            
              <div className={style.Header__catalogo}>
  
              </div>

              <div className={style.content_catalogo}>
                
                </div>


          </div>



        </div> 
  </Layout>
  );
}

export default GroupExample;

function LibrosRecomendados(){
  return(
    <>

      <div className={styleL.container__book}>

        <div className={styleL.container__img}>

          <Image
            src={'/IMG/Info_1.jpg'}
            width={400}
            height={400}
            alt="Libro de FUPAGUA"
          />

        </div>
          
        <div  className={styleL.container__text}>

            <h2>Sipnosis:</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut similique quaerat quae dolore tenetur quo eum amet odio explicabo, deleniti, porro voluptates iure. Officiis consectetur dignissimos asperiores quaerat repellat illum.</p>

        </div>
      </div>

    </>
  )

}