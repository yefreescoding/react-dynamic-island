import Body from "./component/Body";
import "./app.scss";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="wrapper">
        <Body />
      </div>
    </AppProvider>
  );
}

export default App;
