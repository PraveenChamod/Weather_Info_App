import './App.css';
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewWeather from "./pages/ViewWeather";

function App() {
  return (
    <Router>
      <div className="my_app">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/:CityCode" element={<ViewWeather />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
