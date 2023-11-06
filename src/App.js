import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.sass";
/* Components: */
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import References from "./References";
import Footer from "./Footer";
/* Assets: */
import mainImg from "./assets/main.png";
import companyImg from "./assets/company.jpg";
import productsImg from "./assets/products.jpg";
import contactImg from "./assets/contact.jpg";
import businessImg from "./assets/Business.png";
import faceImg from "./assets/Face.png";
import publicImg from "./assets/Public.png";


const NumberAnimator = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 250,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="main-img">
        <img src={ mainImg } />
        <div className="img-content">
          <h1>Software fueling digital marketing</h1>
          <button>Learn more</button>
        </div>
      </div>

      <div className="link-img">
        <div className="img-container">
          <a href="/"><img src={ companyImg } /></a>
          <h2>Company</h2>
        </div>
        <div className="img-container">
          <a href="/"><img src={ productsImg } /></a>
          <h2>Products</h2>
        </div>
        <div className="img-container">
          <a href="/"><img src={ contactImg } /></a>
          <h2>Contact</h2>
        </div>
      </div>

      <div className="number-stats">
        <div className="stat-container">
          <img src={ businessImg }/>
          <div className="stat-animated-content">
            <h1><NumberAnimator n={3000} /></h1>
            <p>Clients</p>
          </div>
        </div>
        <div className="stat-container">
          <img src={ faceImg }/>
          <div className="stat-animated-content">
            <h1><NumberAnimator n={180} /></h1>
            <p>Employees</p>
          </div>
        </div>
        <div className="stat-container">
          <img src={ publicImg }/>
          <div className="stat-animated-content">
            <h1><NumberAnimator n={10000} /></h1>
            <p>Daily users</p>
          </div>
        </div>
      </div>

      <NewsFeed />

      <References />

      <hr />

      <div className="newsletter">
        <h2>Subscribe to our newsletter</h2>
        <p>Follor our story and get the latest promotonial <br/>
        news about our products and events.</p>
        <div className="newsletter-form">
            <form><input type="text" placeholder="Your email address" ></input></form>
            <button>Subscribe</button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;