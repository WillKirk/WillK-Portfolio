import React, {Component} from "react";
import styles from "./ProjectCard.module.scss";

class ProjectCard extends Component {
    render() {
        return (
            <section className={styles.container}>
                <div className={styles.img}>
                    <img src="" alt=""/>
                </div>
                <div className={styles.title}>
                    <h2>Project</h2>
                </div>
                <div className={styles.desc}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Atque veniam qui eaque consequatur facilis. Odio veniam, 
                        fugit sit neque in dolores libero. Aliquid repellat 
                        saepe labore reprehenderit? Eveniet, exercitationem 
                        totam.
                    </p>
                </div>
                <button>Read more</button>


            </section>
        );

        
    }
}

export default ProjectCard