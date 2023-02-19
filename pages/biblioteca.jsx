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
import styles from "../styles/Biblioteca/Book.module.css";

function GroupExample() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 720 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 720, min: 464 },
      items: 1
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
                  <div className={style.Header__text}>
                        <h2>Biblioteca {`"Juana Milano de Díaz"`}</h2>
                        <p>Bienvenidos al catalogo de la biblioteca {`"Juana Milano de Díaz"`}, aqui encontrara información referente de los libros
                        que tenemos en poseción en la Fundación.
                        </p>
                  </div>
                  <div className={style.Header__search}>  {/*Temporal*/}
                    <div className={style.container__search}>

                        <input 
                        type={"text"}
                        className={style.search}
                        /> 


                        <button className={style.button__filter}>
                          <Image 
                          src={'/Vectores/filter.png'}
                          width={400}
                          height={400}
                          alt="Vector de filtro"
                          loading="lazy"
                          />
                        </button>



                    </div>

                      <button className={style.button}>
                        <Image 
                        src={'/Vectores/search.png'}
                        width={400}
                        height={400}
                        alt="Vector del Buscador"
                        loading="lazy"
                        />
                      </button>

                  </div>
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


function Libros({ dataBook }){
    const {
      title,
      subtitle,
      autor,
      description,
      cota,
      img_cloudinary_url,
      img_local_url,
    } = dataBook;

    return (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              src={img_cloudinary_url ? img_cloudinary_url:img_local_url}
              alt="foto de portada"
            />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}> {subtitle}</div>
            <div className={styles.autor}>
              <b>Autor: </b> {autor}
            </div>
            <div className={styles.autor}>
              <b>cota: </b>
              {cota}
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
    );
}