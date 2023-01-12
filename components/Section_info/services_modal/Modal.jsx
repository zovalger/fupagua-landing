import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import style from "../../../styles/SectionInfo/modal_info.module.css";

export default function Modal ({show, onclose}){
    const [isBrowser, setInBrowser] = useState(false)
    useEffect(() => {
        setInBrowser(true);
    }, []);

    const modalContent = show ? (
        <div className={style.prueba}>
            <p>hola mundo</p></div>

    ) : null
    
    if(isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal_services")
        );
    }

}

