import "./App.css";
import Bus from "./Components/Bus/Bus";
import { Payment } from "./Components/Payment/Payment";
import { Route } from "react-router-dom";
import { BusDetails } from "./Components/BusDetails/BusDetails";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Flights from "./Components/Flights/Flights";
import Hotels from "./Components/Hotels/Hotels";
import Trains from "./Components/Trains/Trains"
import About from "./Components/About";
import Holidays from "./Components/cabs/Holidays";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Bus />
      </Route>
      {/* <Route path="/bus">
        <BusDetails />
      </Route> */}
      <Route path="/payment">
        <Payment />
      </Route>
      <Route path="/flights">
        <Flights/>
      </Route>
      <Route path="/hotels">
        <Hotels/>
      </Route>
      <Route path="/trains">
        <Trains/>
      </Route>
      <Route path="/cabs">
        <Holidays/>
      </Route>
       <Route path="/About"
      >
        <About/>
      </Route>
    </div>
  );
}

export default App;
