import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact =()=>{

    return(
        <section id="contact" className="contact">
            <PageHeaderContent headerText="Contact Me"/>

            <div className="contact__content">
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform: "translateX(200px)"
                }}
                end={{
                    transform: "translateX(0px)"
                }}>
                    <div className="contact__content__form">
                        <div className="contact__content__form__controlWrapper">
                            <div className="name-wrapper">
                                <input required name="name" className="inputName" type="text" />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div className="email-wrapper">
                                <input required name="email" className="inputEmail" type="text" />
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div className="body-wrapper">
                                <textarea required name="body" className="inputBody" type="text" rows={12} />
                                <label htmlFor="body" className="bodyLabel">Description</label>
                            </div>
                        </div>
                    </div>
                    <button>Submit</button>
                </Animate>
            </div>

        </section>
    );

}

export default Contact;