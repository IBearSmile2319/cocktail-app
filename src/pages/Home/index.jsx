
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import DataContext from '../../context/DataContext';
import './Home.css'

const Home = () => {
  const { data, addToCart, removeToCart } = useContext(DataContext)
  const {cart,total}=useSelector(satate=>satate.data)
  return (
    <>
    <Header cart={cart} total={total}/>
      <main className="main container">
        <div className="grid col-4 med-col-3 peq-col-2">
          {
            data?.map(e =>
              <div className="card"
                style={{
                  backgroundImage: `url(${e.strDrinkThumb})`,
                  backgroundSize: 'cover',
                }}
                key={e.idDrink}>
                <div className="card-head">
                  <span>${e.price}</span>
                  {cart?.find(i => i.idDrink === e.idDrink) ?
                    <button
                      className="remove"
                      type="button"
                      onClick={() => removeToCart(e)}>
                      <ion-icon name="trash"></ion-icon>
                    </button>
                    :
                    <button
                      className="add"
                      type="button"
                      onClick={() => addToCart(e)}>
                      <ion-icon name="cart"></ion-icon>
                    </button>
                  }
                </div>
                <div className="card-body">
                  <h2>{e.strDrink}</h2>
                  <p>{e.strCategory}</p>
                </div>
              </div>
            )
          }
        </div>


      </main>
    </>
  )
};

export default Home;

