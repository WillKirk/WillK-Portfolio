import React, { Component } from 'react';
import styles from './App.module.scss';
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import Routes from "./Routes/Routes";

class App extends Component {
  render() {
    return (
      <>
        <section className={styles.container}>
          <Intro/>
          <NavBar/>
          <About/>
          <Projects/>
          <Contact/>
        </section>
      </>
    )
  }
}

export default App;
