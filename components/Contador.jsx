import style from '../styles/InfoLanding/contador.module.css'


export default function Contador(){
    return(
        <>
            <div className={style.container}>

                <div className={style.contador}>
                    <h2>Visitantes:</h2>
                    <p>{/*Numero de visitantes*/}</p>
                </div>

            </div>
        </>
    )
}