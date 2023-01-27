// Funciones de Reat/Next
import Image from "next/image";

//CSS

import style from '../styles/HeaderLanding/Headerlanding.module.css'

// Componentes

// Librerias




/////*** ******////

export default function HeaderLanding({imagenes}){
    return(
        <div className={style.contenedor}>
          
            {imagenes.map((imagen, index)=>{
                return <Image 
                key={index}
                src={(`/public/IMG${imagen}`)}
                alt="FUPAGUA"
                width={400}
                height={400}
                />
            })}
     
           	

  
        </div>
    )
}
