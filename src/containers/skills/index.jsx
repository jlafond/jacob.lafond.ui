import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";


const Skills =()=>{

    return(
        <section id="skills" className="skills">
            <PageHeaderContent headerText="My Skills"/>

            <div className="skills__content-wrapper" >
                {
                    skillsData.map((item,i)=> (
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <div className="animated-wrapper">
                            
                            <Animate  play duration={.5} delay={0.3}
                            start={{transform:"translateX(-200px)"}}
                            end={{transform:"translateX(0px)"}}>
                                <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                                <div>
                                    {
                                        item.data.map((skill,s)=>(
                                            <AnimateKeyframes
                                            play
                                            duration={1}
                                            keyframes={["opacity: 1", "opacity: 0"]}
                                            iterationCount="1">
                                                <div className="progressbar-wrapper" key={s}>
                                                    <p>{skill.skillName}</p>
                                                    <Line
                                                    percent={skill.percentage}
                                                    strokeWidth={2}
                                                    strokeColor="var(--main-theme-main-color)"
                                                    trailWidth={2}
                                                    trailColor="var(--main-theme-accent-main-color)"
                                                    strokeLinecap="square" />
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>

                            </div>
                            
                        </div>
                    ))
                }
            </div>

        </section>
    );

}

export default Skills;