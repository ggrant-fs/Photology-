import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import ReviewPage from "./Components/ReviewPage";
import ShowPage from "./Components/ShowPage";
import AboutMe from "./Components/AboutMe";
// import { baseURL, config } from "./Services/index";
// import axios from "axios";
import { Route } from "react-router-dom";
// import { useEffect, useState } from "react";

import "./App.css";

function App() {
  //get request
  // const apiData = async () => {
  //   const apiRequest = await axios.get(baseURL, config);
  //   console.log(apiRequest.data.records);
  // };

  // //post request
  // const formPostRequest = async (fields) => {
  //   await axios.post(baseURL, { fields: fields }, config);
  // };
  // useEffect(() => {
  //   apiData();
  // }, []);
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
