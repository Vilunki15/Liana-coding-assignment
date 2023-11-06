import React from "react";
import "./App.sass";
import bosch from "./assets/boschLogo.png";
import theBodyShop from "./assets/thebodyshopLogo.png";
import laplandHotels from "./assets/laplandhotelsLogo.png";
import ikea from "./assets/ikeaLogo.png";

const References = () => {
  const referenceData = [
    {
      logo: bosch,
      title: 'Robert Bosch',
      text: 'Bosch is a multinational engineering and electronics company.',
    },
    {
      logo: theBodyShop,
      title: 'The Body Shop',
      text: 'The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.',
    },
    {
      logo: laplandHotels,
      title: 'Lapland Hotels',
      text: 'Lapland Hotels is the largest and the most diverse hotel chain in Lapland.',
    },
    {
      logo: ikea,
      title: 'IKEA',
      text: 'IKEA is a multinational furniture store.',
    },
  ];

  return (
    <div className="references">
      <h2>References</h2>
      <div className="reference-containers">
        {referenceData.map((reference, index) => (
          <div className="reference-container" key={index}>
            <div className="reference-logo">
              <img src={reference.logo} alt={reference.title} />
            </div>
            <div className="reference-text">
              <h3>{reference.title}</h3>
              <p>{reference.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




const References32 = () => {
  return (
    <div className="references">
      <h2>References</h2>
      <div className="reference-containers">
        <div className="reference-container">
          <div className="reference-logo">
            <img src={ bosch }/>
          </div>
          <div className="reference-text">
            <h3>Robert Bosch</h3>
            <p>Bosch is a multinational engineering and electronics company.</p>
          </div>
        </div>
        <div className="reference-container">
          <div className="reference-logo">
            <img src={ theBodyShop }/>
          </div>
          <div className="reference-text">
            <h3>The Body Shop</h3>
            <p>The Body Shop is a global beaty brand and it has more than 3,000 stores in more than 60 countries.</p>
          </div>
        </div>
        <div className="reference-container">
          <div className="reference-logo">
            <img src={ laplandHotels }/>
          </div>
          <div className="reference-text">
            <h3>Lapland Hotels</h3>
            <p>Lapland Hotels is the larges and the most diverse hotel chain in Lapland.</p>
          </div>
        </div>
        <div className="reference-container">
          <div className="reference-logo">
            <img src={ ikea }/>
          </div>
          <div className="reference-text">
            <h3>IKEA</h3>
            <p>IKEA is a multinational furniture store.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;