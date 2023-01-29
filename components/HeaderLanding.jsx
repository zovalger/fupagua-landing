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
            <div className={style.slider}>
                <button className={style.back}>{`<`}</button>
            {imagenes.map((imagen, index)=>{
                return <Image 
                key={index}
                src={imagen}
                alt="FUPAGUA"
                width={800}
                height={800}
                />
            })}
            <button className={style.next}>{`>`}</button>
      </div>
        </div>
    )
}
