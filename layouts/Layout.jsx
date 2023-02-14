import NavLanding from "../layouts/NavLanding";

function Layout({children, title}) {
  return (
      <div>
          <header>
          <title>{title}</title>
          <NavLanding />
          </header>

<main> {children} </main>

      <footer>
              footer
          </footer>
          </div>   
  );
}

export default Layout;