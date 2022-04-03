import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./Card";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
                
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
    </div>
  );
}
