import React from "react";
import Card from "./components/Card";


function App() {
  const [cards, setCards] = React.useState([
    {
      source: "hello",
      target: "bună ziua",
    },
    {
      source: "goodbye",
      target: "la revedere",
    },
  ]);
  
    return (
    <>
      <h1>Leitner Box</h1>
      <ul>
        {cards.map((card) => (
          <Card key={Math.random()} source={card.source} target={card.target} />
        ))}
      </ul>
    </>
  );
}

export default App;