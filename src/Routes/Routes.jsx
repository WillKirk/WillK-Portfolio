import React, { Component } from "react";
import { Router } from "@reach/router";
import Contact from "../components/Contact/Contact";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import NavBar from "../components/NavBar/NavBar";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Intro path="/"/>
                <NavBar path="/:"/>
                <About path="/:"/>
                <Projects path="/:"/>
                <Contact path="/:"/>
            </Router>
        );
    }
}

export default Routes;