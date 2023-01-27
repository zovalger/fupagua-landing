import style from "../styles/NavLanding/NavLanding.module.scss";
import Link from "next/link";
import Image from "next/image";

export function NavLanding() {
	return (
		<nav className={style.container}>

			<div className={style.logo}>
				<Image src="/Logo.jpg" width={1000} height={1000} alt="logo fupagua" />
			</div>
			<div className={style.name}>FUPAGUA</div>

			<ul className={style.link_List}>
				<li>
					<Link href="/">sobre nosotros</Link>
				</li>

				<li>
					<Link href="/">servicios</Link>
				</li>

				<li>
					<Link href="/">aprendizaje</Link>
				</li>
				<li>
					<Link href="/">biblioteca</Link>
				</li>
				<li>
					<Link href="/">Actividades</Link>
				</li>
				<li>
					<Link href="/">contacto</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavLanding;
