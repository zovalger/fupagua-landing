import Image from "next/image";
import { useState, useEffect } from "react";


// estilos 

import style from '../styles/HeaderLanding/SliderHeader.module.css' 



export default function SliderHeader(props, {autoplay}){
    const imagenes = [
		'frontFupaguaImg.jpg',
		'Info_1.jpg'
		
	]

    const [selectedIndex,setSelectedIndex] = useState(0);
    const [selectedImage,setSelectedImage] = useState(imagenes[0]);
    const [loaded, setLoaded] = useState(false)


    const selectNewImage = ( index, imagenes , next = true) => {
            setLoaded(false);
            setTimeout(()=>{
                const condition = next ? selectedIndex < imagenes.length - 1 : selectedIndex > 0; 
                const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : imagenes.length - 1); 
                setSelectedImage(imagenes[nextIndex]);
                setSelectedIndex(nextIndex);
            }, 550)
           
    }

    useEffect(()=>{
        if(props.autoplay){
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, imagenes);
            }, 6000);
            return () => clearInterval(interval);
        }  
    });

    const previos = () =>{
    

        selectNewImage(selectedIndex, imagenes, false)
    }
    
    const next = () =>{
      

        selectNewImage(selectedIndex, imagenes)
    }
  

    return (
  
        <div className={style.containerSlider}>
            <div className={style.logo}>
                <Image 
                src={'/Icons/Logo-Fupagua.png'}
                width={200}
                height={200}
                alt={'Logo de FUPAGUA'}
                loading="lazy"
                />
            </div>

            <button onClick={previos} className={style.back}>{`<`}</button>

            <Image 
            className={`${style.imgSlider} ${loaded ? style.loaded : ""}`}
            src={require(`/public/IMG/${selectedImage}`).default}
            width={800}
            height={800}
            alt="FUPAGUA"
            onLoad={() => setLoaded(true)}
            loading="lazy"
            />

            <button onClick={next} className={style.next}>{`>`}</button>

        </div>    
 
    )
}