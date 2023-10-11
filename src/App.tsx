import DynamicIsland from "./component/dynamicIsland/DynamicIsland";
import Body from "./component/Body";
import "./app.scss";
import CardsContainer from "./component/CardsContainer";

function App() {
  return (
    <div className="wrapper">
      <DynamicIsland />
      <Body>
        <CardsContainer />
      </Body>
    </div>
  );
}

export default App;
