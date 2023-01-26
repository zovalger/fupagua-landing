import Image from "next/image"; 
import Head from "next/head";
import  global  from "../styles/globals.css";

export default function Prueba (){
    return(
        <div>
        <Head>
                <title>FUPAGUA</title>
                 <meta
                     name="description"
                     content="Fundación de personas autista del estado guárico"
                 />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="icon" href="/logo.jpg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <main>
            <section>
                <div className='container'>
                    <div className='container__info'>
                        <div className='img_info'>
                        </div>
                        <div className='text_info'>

                        </div>
                    </div>
                </div>
            </section>
        </main>


        </div>


    )
}


const container = {
    display: flex;
    min
}