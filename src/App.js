import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewWeather from "./pages/ViewWeather";
import { store, persistor } from "../src/redux/store";
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div className="my_app">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/:CityCode" element={<ViewWeather />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
