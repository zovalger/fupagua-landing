import NavLanding from "../layouts/NavLanding";
import FooterLanding from "../layouts/FooterLanding";
import Head from "next/head";

function Layout({children, title}) {
  return (

      <div>
        	<Head>
				<title>FUPAGUA</title>
				<meta
					name="description"
					content="Fundación de Personas Autista del Guárico"
				/>
				<link rel="icon" href="/logo.jpg" />
			</Head>
          <header>
          <title>{title}</title>
          <NavLanding />
          </header>

<main> {children} </main>

      <footer>
        <FooterLanding />
        </footer>
        </div>   
  );
}

export default Layout;