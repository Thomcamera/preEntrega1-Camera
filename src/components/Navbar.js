
import Brand from "./Brand";
import CartWidget from "./CartWidget";

function Navbar() {
    return ( 
        <div>       
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                <Brand/>
                </a>
            </div>
            <div className="navbar-menu is-active">
            <div className="navbar-start">
            <a class="navbar-item">
                Inicio 
                </a>
                <a class="navbar-item">
                Menu
                </a>
                <a class="navbar-item">
                Contacto 
                </a>
                </div>
                <div className="navbar-end">
                <a class="navbar-item">
                    <CartWidget/>
                </a>
                </div>
            </div>
               
            </nav>
        </div>
    )
}

export default Navbar;