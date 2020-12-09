import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import ReviewPage from "./Components/ReviewPage";
import ShowPage from "./Components/ShowPage";
import AboutMe from "./Components/AboutMe";
import axios from "axios";
import { Route } from "react-router-dom";
import { useEffect } from "react";
// import { baseURL, config } from "./Services";
import "./App.css";

function App() {
  useEffect(() => {
    async function fetchData() {
      const baseURL = `https://api.airtable.com/v0/appYFxGlqpW0UKaDL`;
      const config = {
        header: "Authorization: Bearer keyByH3KyRC1apfnn",
      };
      const response = await axios.get(baseURL, config);
      console.log(response);
    }
    fetchData();
  }, []);
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
      <Route path="/review/">
        <ReviewPage />
      </Route>
    </div>
  );
}
export default App;
