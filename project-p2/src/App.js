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
      {/* the route below is the contact ContactPage */}
      <Route path="/contact">
        <ContactPage />
      </Route>
      {/* the route below is the about page  */}
      <Route path="/about">
        <AboutMe />
      </Route>
      {/* the route below is the show ShowPage */}
      <Route path="/show">
        <ShowPage />
      </Route>
      {/* the route below is the review ReviewPage */}
      <Route path="/review">
        <ReviewPage />
      </Route>
    </div>
  );
}
export default App;
