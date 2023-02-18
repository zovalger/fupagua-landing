import NavLanding from "../layouts/NavLanding";
import FooterLanding from "../layouts/FooterLanding";

function Layout({children, title}) {
  return (
      <div>
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