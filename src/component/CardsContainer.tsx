// import { useEffect } from "react";
import Card from "./Cards";

export default function CardsContainer() {
  return (
    <div className="card_container">
      <Card
        title="Add this item to the cart to see what happens"
        image="/cover-img.webp"
        text="The animation is almost identical to the one that you can find on the iPhones, looks great on any website."
      />
    </div>
  );
}
