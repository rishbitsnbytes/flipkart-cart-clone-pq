import "./styles.css";
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
