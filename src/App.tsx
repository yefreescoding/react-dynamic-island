import DynamicIsland from "./component/dynamicIsland/DynamicIsland";
import Body from "./component/Body";
import "./app.scss";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="wrapper">
        <DynamicIsland />
        <Body />
      </div>
    </AppProvider>
  );
}

export default App;
