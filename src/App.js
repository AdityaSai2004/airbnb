import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./Card";
import data from "./data";
export default function App() {
      const cards = data.map(item => {
        return (
            <Card 
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}
