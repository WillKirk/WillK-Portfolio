import React, { Component } from "react";
import styles from "./NavBar.module.scss";

class NavBar extends Component {


    render() {
        return (
            <>
                <nav className={styles.container}>                    
                    <ul className={styles.links}>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">Resume</a>
                        </li>
                    </ul>                   
                </nav>
            </>
        );
    }
}

export default NavBar;