import "./style.scss"
const Header = () => {
    return ( 
        <div className="header-container">
            <div className="logo">
                <img src="./img/Shoply.svg" alt="" />
            </div>
            <nav className="header__navigation">
                <a className = "header__nav header__nav--primary" href="#">Home</a><span>/</span>
                <a className = "header__nav" href="#">Products</a><span>/</span>
                <a className = "header__nav" href="#">About</a>
            </nav>
            <div className="header__login">
                <button className = "shopping-cart"><img  src="./img/shopping-cart.svg" alt="" /></button>
                <button className="btn header__button">Login</button>
            </div>
        </div>
     );
}
 
export default Header;