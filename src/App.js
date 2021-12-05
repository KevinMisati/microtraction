import React, { Component} from "react";
import classes from "./App.module.css"
import Banner from "./components/Banner"
import AcceptApplications from "./components/AcceptApplications";
import Diffrences from "./components/Diffrences";
import Startups from "./components/Startups";
import Portfolio from "./components/Portfolio";
import Who from "./components/Who"
import Footer from "./components/Footer";


class App extends Component{
  render(){
    return(
      <div className={classes.site}>
        <Banner />
        <AcceptApplications />
        <Diffrences />
        <Startups />
        <Portfolio />
        <Who />
        <Footer />
      </div>
    );
  }
}

export default App;