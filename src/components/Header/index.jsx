
import { Link } from 'react-router-dom';
import './index.css'
const Header = ({ cart,total }) => {
    return (
        <header className="header">
            <nav className="wrapper container">
                <Link className="link-app" to="/" >
                    CocktailApp
                </Link>
                <Link to="/cart" className="cart-resume">
                    <div className="cart-basket">
                        <ion-icon name="basket-outline"></ion-icon>
                        <span>{cart.length}</span>
                    </div>
                    <p>${total}</p>
                </Link>
            </nav>
        </header>
    )
};

export default Header;
