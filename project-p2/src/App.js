import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import ReviewPage from "./Components/ReviewPage";
import ShowPage from "./Components/ShowPage";
import AboutMe from "./Components/AboutMe";
import { Route, Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      ============================
      <Route path="/contact">
        <ContactPage />
      </Route>
      =============================
      <Route path="/about">
        <AboutMe />
      </Route>
      =============================
      <Route path="/show">
        <ShowPage />
      </Route>
      =============================
      <Route path="/review">
        <ReviewPage />
      </Route>
      ==============================
    </div>
  );
}
export default App;
