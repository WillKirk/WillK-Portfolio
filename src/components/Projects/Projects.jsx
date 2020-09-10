import React, { Component } from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

class Projects extends Component {
    render() {
        return (
            <section className={styles.container}>
                <div className={styles.title}>                   
                    <h2>Here are some of my projects</h2>
                </div>
                <div className={styles.cards}>
                    <div className={styles.projectCard}>
                        <ProjectCard/>
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard/>
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard/>
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard/>
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard/>
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;