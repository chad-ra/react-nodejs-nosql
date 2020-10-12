import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const opendMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  return (
        <div className="grid-container">
            <header className="header">
                <button onClick={opendMenu}>X</button>
                <div className="brand">
                    <a href="index.html">Amazonaz</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Signin</a>
                </div>
            </header>
            <aside>
              <ul>
                <li href="index.html">กินข้าว</li>
              </ul>          
            </aside>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        <li>
                            <div className="products">
                                <img src="/images/a.jpg" alt="product"></img>
                                <div className="products-name">
                                    <a href="product.html">Slim Shirt</a>
                                </div>
                                <div className="products-brand">Nike</div>
                                <div className="product-price">60$</div>
                            </div>
                        </li>
                    </ul>   
                </div>
            </main>
            <footer className="footer">
                All right reserved
            </footer>
        </div> 
  );
}

export default App;
