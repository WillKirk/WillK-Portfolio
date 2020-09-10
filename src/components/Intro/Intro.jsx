import React, { Component } from "react";
import styles from "./Intro.module.scss";

class Intro extends Component {
    render() {
        return (         
                <section className={styles.intro}>
                    <h1>Will Kirkpatrick</h1>
                    <h2>Software Developer</h2>
                    <h3>Welcome to my Portfolio site where you can learn a little about me and have a look at the some of the projects I have worked on</h3>
                </section>
        );
    }
}

export default Intro;