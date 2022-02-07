import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import './CartPage.css'
const CartPage = () => {
  const { removeToCart } = useContext(DataContext)
  const { cart, total } = useSelector(state => state.data)
  return <>
    <div className="cart-page">
      <div className="wrapper container">
        <div className="head">
          <Link className="link-app" to="/" >
            <ion-icon name="arrow-back"></ion-icon>
          </Link>
          <div className="divider"></div>
          <div className="title">Your shopping cart</div>
        </div>
      </div>
    </div>
    <div className="cart-main container">
      <div className="cart-items">
        {cart.map(item => (
          <div className="cart-item" key={item.idDrink}>
            <div className="cart-item-img">
              <img src={item.strDrinkThumb} alt="" />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-name">
                <p> {item.strDrink}</p>
                <span>{item.strCategory}</span>
              </div>
              <div className="cart-item-price">${item.price} <span> Price a Drink</span></div>
              <div className="cart-item-quantity">
                <button disabled>-</button>
                <span>1</span>
                <button disabled>+</button>
              </div>
            </div>
            <div className="cart-item-remove">
              <ion-icon name="trash" onClick={() => removeToCart(item)}></ion-icon>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <div className="cart-total-items">
          <span>{cart.length}</span>
          <svg version="1.1" className="cart-total-person" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 99.132 99.132" >
            <g>
              <path d="M41.755,28.796c5.975,0,10.836-4.861,10.836-10.836S47.73,7.124,41.755,7.124S30.918,11.985,30.918,17.96
		S35.78,28.796,41.755,28.796z"/>
              <path d="M78.437,14.73h-1.081c0.019-0.077,0.047-0.15,0.047-0.232c0-0.552-0.448-1-1-1h-1.979V7.997
		c1.965-0.456,3.437-2.212,3.437-4.314v-2.26C77.861,0.499,77.078,0,76.342,0h-5.698c-0.961,0-1.658,0.599-1.658,1.424v2.26
		c0,2.102,1.473,3.858,3.438,4.314v5.5h-1.979c-0.552,0-1,0.448-1,1c0,0.082,0.028,0.156,0.047,0.232h-1.595
		c0.019-0.077,0.047-0.15,0.047-0.232c0-0.552-0.448-1-1-1h-1.979V7.997c1.965-0.456,3.437-2.212,3.437-4.314v-2.26
		C68.402,0.499,67.619,0,66.883,0h-5.698c-0.961,0-1.658,0.599-1.658,1.424v2.26c0,2.102,1.473,3.858,3.438,4.314v5.5h-1.979
		c-0.552,0-1,0.448-1,1c0,0.082,0.028,0.156,0.047,0.232h-4.096c-1.104,0-2,0.896-2,2s0.896,2,2,2h6.317l-1.546,10.438
		c-0.093,0.629-0.755,1.256-1.388,1.315l-9.16,0.855H34.223h-0.884h-1.366c-1.433,0-3.144,0.878-3.979,2.042L19.42,45.325
		c-0.863,1.202-0.97,3.152-0.243,4.441l6.942,12.325c0.711,1.263,2.404,2.252,3.853,2.252h0.367v0.12v0.503v29.166
		c0,2.757,2.243,5,5,5h0.352c2.757,0,5-2.243,5-5V67.966h2.126v26.166c0,2.757,2.243,5,5,5h0.353c2.757,0,5-2.243,5-5V64.966v-0.503
		V40.637l11.027-2.934c1.427-0.379,2.755-1.813,3.023-3.266l2.877-15.558c0.009-0.05,0.005-0.099,0.012-0.149h8.328
		c1.104,0,2-0.896,2-2S79.541,14.73,78.437,14.73z M30.339,55.105l-3.399-5.539c-0.369-0.6-0.337-1.673,0.065-2.251l3.334-4.785
		V55.105z"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
          </svg>
        </div>
        <div className="cart-total-price">
          {/* <span>${cart.reduce((acc, item) => acc + item.price, 0)}</span> */}
          <p>
            ${total}
            <span> Total Price</span>
          </p>
        </div>
      </div>
    </div>
  </>;
};

export default CartPage;
