import Container from "./component/Container";
import "./app.scss";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Container />
    </AppProvider>
  );
}

export default App;
