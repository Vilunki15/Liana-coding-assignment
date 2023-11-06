import React from "react";
import "./App.sass";

/* RSS ready content using map variable */

const NewsFeed = () => {
  const newsItems = [
    { date: '27.07.2016', title: 'Liana Technologies and Encode Solutions merge to create unique mobile solutions' },
    { date: '28.01.2016', title: 'From a local startup to a global player: Liana Technologies among the forerunners of digital marketing technology' },
    { date: '02.07.2015', title: 'Liana Technologies Hong Kong launched a series of digital marketing events in June' },
  ];

  return (
    <div className="newsfeed">
      <h2>Latest news</h2>
      <div className="newsfeed-containers">
        {newsItems.map((item, index) => (
          <div className="newsfeed-container" key={index}>
            <p>{item.date}</p>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
