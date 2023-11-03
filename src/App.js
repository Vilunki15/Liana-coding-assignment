import React from "react";
import "./App.sass";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import Footer from "./Footer";



const App = () => {
  return (
    <div>
      <Header />
      <NewsFeed />
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