import CardsContainer from "./CardsContainer";
import DynamicIsland from "./dynamicIsland/DynamicIsland";

export default function CartSection() {
  return (
    <section className="section cart">
      <DynamicIsland />
      <div className="text">
        <h2>The same animations, functionality, and design as the original.</h2>
        <p>
          This component will look amazing in any webpage or web application you
          want to add it to. Feel free to modify the code to your needs.
        </p>
      </div>
      <CardsContainer />
    </section>
  );
}
