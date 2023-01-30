// Funciones de Reat/Next
import Image from "next/image";
import { useState } from "react";

//CSS

import style from '../styles/HeaderLanding/Headerlanding.module.css'

// Componentes

// Librerias




/////*** ******////

export default function HeaderLanding({imagenes}){
    const [imagenA, setImagenA] = useState(0);

        const cantidad = imagenes?.length; 



        if(!Array.isArray(imagenes) || cantidad === 0)
        return;

        const sigueinteI = () =>{
            setImagenA(imagenA === cantidad - 1 ? 0 : imagenA + 1);
        }

        const anteriorI = () =>{
            setImagenA(imagenA === cantidad - 1 ? cantidad - 1 : imagenA - 1 );
        }

    return(
        <div className={style.contenedor}>
            <div className={style.slider}>
                <button className={style.back} onClick={anteriorI}>{`<`}</button>
               
            {imagenes.map((imagen, index)=>{
                return( 
                    <>
                 
                        {imagenA === index && (
                            <div className={imagenA === index ? `${style.imagenes} ${style.active}` : style.imagenes}>
                                <Image 
                                key={index}
                                src={imagen}
                                alt="FUPAGUA"
                                width={800}
                                height={800}
                                />
                            </div>
                        )} 
            
                    </>
                   );
              
            })}

            <button className={style.next} onClick={sigueinteI}>{`>`}</button>
      </div>
        </div>
    )
}
