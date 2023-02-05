// React/Next
import Image from 'next/image';

// CSS

import style from '../styles/InfoLanding/Info.module.css'

export default function InfoLanding(){
    return(
        <div className={style.container}>

            <h2>Información</h2>

            <div className={style.container__info}>

                    <div className={style.container__img}>

                        <Image 
                        src={'/IMG/info_1.jpg'}
                        width={600}
                        height={600}
                        alt="FUPAGUA"
                        loading='lazy'
                        />

                    </div>

                    <div className={style.container__text}>

                        <p>Somos una fundación sin animo de lucro llamada FUPAGUA, <strong>Fundación de Personas Autistas del Estado Guárico</strong></p>

                    </div>

            </div>

        </div>
  
    )
}