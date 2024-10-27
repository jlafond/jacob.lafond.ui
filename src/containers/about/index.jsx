import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import moment from "moment";
import { Animate } from "react-simple-animate";
import { FaBicycle, FaBreadSlice, FaDev, FaDatabase } from 'react-icons/fa';

import "./styles.scss";

const About =()=>{

    const age = moment(Date.now())
        .diff(moment("1991-05-05T00:00:00"), "years");

    const personalDetails = [
        {
            label: "Name",
            value: "Jacob Lafond"
        },
        {
            label: "Age",
            value: age
        },
        {
            label: "Location",
            value: "United States"
        },
        {
            label: "Email",
            value: "jacob.b.lafond@gmail.com"
        }
    ]



    return(
        <section id="about" className="about">
            <PageHeaderContent headerText="About Me"/>

            <div className="about__content">

                <div className="about__content__personal-wrapper">
                    <Animate play duration={.5} delay={0}
                        start={{transform : "translateX(-1000px)"}}
                        end={{transform : "translateX(0px)"}}>
                        <div className="about-personal-text">
                            <h3>Software Engineer</h3>
                            <p>Innovative, full-stack software engineer with proven ability and experience enhancing and building software products in fast-paced, direct-to-consumer environments. Highly proficient in providing practical solutions throughout the entire software development lifecycle, alongside implementing innovative tools to ensure efficiency and offering solid expertise in troubleshooting skills.</p>
                            <p>Considerable experience working in a global remote environment, working directly with stakeholders to provide results in a large scale high availability enterprise setting</p>
                        </div> 
                    </Animate>
                    
                    <Animate play duration={.5} delay={0}
                        start={{transform : "translateY(1000px)"}}
                        end={{transform : "translateY(0px)"}}>
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => ( // Use parentheses for returning JSX
                                <li key={i}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__image-wrapper">
                    <div className="image-wrapper__content">
                        <Animate play duration={.5} delay={0}
                        start={{transform : "translateX(1000px)"}}
                        end={{transform : "translateX(0px)"}}>
                            <div className="image-bg">
                                <div className="image-wrapper">
                                    <div>
                                        <FaDev size={60} color="var(--main-theme-main-color)" />
                                    </div>
                                    <div>
                                        <FaBreadSlice size={60} color="var(--main-theme-main-color)" />
                                    </div>
                                    <div>
                                        <FaBicycle size={60} color="var(--main-theme-main-color)" />
                                    </div>
                                    <div>
                                        <FaDatabase size={60} color="var(--main-theme-main-color)" />
                                    </div>
                                </div>
                            </div>
                        </Animate>
                    </div>
                    
                    <Animate play duration={.5} delay={0}
                    start={{transform : "translateY(1000px)"}}
                    end={{transform : "translateY(0px)"}}>
                        <h3 className="personalInformationHeaderText">Personal</h3>
                        <p>Born and raised in Rockville, MD. Graduated from Colonol Zadok Magruder High School in 2009. Studied Computer Engineering and Biometric Systems at West Virginia University.</p>
                        <p>Happily married and very proud father of 2. Avid baker constantly tweaking and trying new recipes for breads, muffins, and cookies.</p>
                        <p>Runner turned road and hybrid cyclist. Follow me on Peloton: obi_wan_jacobi</p>
                    </Animate>
                </div>

                


            </div>

        </section>
    );

}

export default About;