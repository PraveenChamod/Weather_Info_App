import './App.css';
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import ViewWeather from "./pages/ViewWeather";

function App() {
  return (
    <div className="my_app">
      {/* <Dashboard/> */}
      <ViewWeather/>


      <Footer/>
    </div>
  );
}

export default App;
