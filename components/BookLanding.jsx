import style from "../styles/BannerLanding/BannerLanding.module.css";

function BookLanding() {
  return (
<div className={style.bg_book}>  
  <div className={style.text}> 
  <strong> 
  <h2 className={style.title}> 
  Biblioteca
  </h2>
  </strong>
  <p className={style.subtitle}> 
  lorem hdh hdh 
  </p> 
  </div>
  <div className={style.image}>
  <img 
                src="/img_banners/library_img.svg"
                alt="libros_img"  
                className="img" 
                width="400"
                height="400"
                />
  </div>
  </div>
  );
}

export default BookLanding;