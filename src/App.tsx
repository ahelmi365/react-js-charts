import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="wrapper container">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
