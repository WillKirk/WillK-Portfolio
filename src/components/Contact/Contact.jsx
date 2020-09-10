import React, { Component } from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends Component {
    render() {
        return(
            <section className={styles.contact}>
                <h2>Don't hesitate to get in touch through one of the palforms below</h2>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <a href="https://github.com/WillKirk"><p><span><FontAwesomeIcon icon="tachometer-alt"></FontAwesomeIcon></span>GitHub</p></a>
                    </div>
                    <div className={styles.icon}>
                       <a href="mailto:willkirkpatrick097@gmail.com"><i class="fas fa-envelope"></i></a>
                    </div>
                    <div className={styles.icon}>
                        
                    </div>
                    <div className={styles.icon}>
                        
                    </div>
                </form>
            </section>
        );
    }
}

export default Contact;