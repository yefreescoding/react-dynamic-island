// import { useEffect } from "react";
import Card from "./Cards";

import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function CardsContainer() {
  const { state } = useContext(AppContext);

  return (
    <div className="card_container">
      {state.data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          text={card.text}
          id={card.id}
        />
      ))}
    </div>
  );
}
