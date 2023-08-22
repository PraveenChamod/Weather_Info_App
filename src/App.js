import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewWeather from "./pages/ViewWeather";
import { store } from "../src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="my_app">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/:CityCode" element={<ViewWeather />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
