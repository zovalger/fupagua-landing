import Image from "next/image";
import { useState } from "react";


// estilos 

import style from '../styles/HeaderLanding/SliderHeader.module.css' 



export default function SliderHeader(){
    const imagenes = [
		'1.jpg',
		'2.jpg',
		'1.jpg',
		'Libro.png'
	]

    const [selectedIndex,setSelectedIndex] = useState(0);
    const [selectedImage,setSelectedImage] = useState(imagenes[0]);
    const [loaded, setLoaded] = useState(false)


    const selectNexImage = ( index, imagenes , next = true) => {
            setLoaded(false);
            const condition = next ? selectedIndex < imagenes.length - 1 : selectedIndex > 0; 
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : imagenes.length - 1); 
            setSelectedImage(imagenes[nextIndex]);
            setSelectedIndex(nextIndex);
    }

    const previos = () =>{
    

        selectNexImage(selectedIndex, imagenes, false)
    }
    
    const next = () =>{
      

        selectNexImage(selectedIndex, imagenes)
    }


    return (
  
        <div className={style.containerSlider}>
            <div className={style.logo}>
                <Image 
                src={'/Icons/logo.jpg'}
                width={80}
                height={100}
                alt={'Logo de FUPAGUA'}
                />
            </div>
            <button onClick={previos} className={style.back}>{`<`}</button>
            <Image 
            className={style.imgSlider}
            src={require(`/public/IMG/${selectedImage}`).default}
            width={800}
            height={800}
            alt="FUPAGUA"
            onLoad={() => setLoaded(true)}
            />
            <button onClick={next} className={style.next}>{`>`}</button>
        </div>    
 
    )
}