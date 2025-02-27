import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";
import { MdWork } from 'react-icons/md';
import { FaUniversity, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Resume =()=>{

    return(
        <section id="resume" className="resume">
             <PageHeaderContent headerText="My Resume"/>

             <div className="header">
                <div className="headerText">
                    For more information regarding experiences please visit my page and readme 
                </div>
                <Link to="https://www.linkedin.com/in/jacob-lafond/" className="header-icon">
                    <FaLinkedinIn size={30} />
                </Link>
                <Link to="https://github.com/jlafond/jacob.lafond.ui" className="header-icon">
                    <FaGithub size={30} />
                </Link>
            </div>

            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text"> 
                        Experience
                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--main-theme-main-color)">
                    {
                        data.experience.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__experience__vertical-timeline-element"
                            contentStyle={{
                                background: 'none',
                                color: 'var(--main-theme-main-color)',
                                border: '1px solid var(--main-theme-main-color)',
                                boxShadow: '5px 10px 10px 5px #cad6f220'
                            }}
                            date={item.date}
                            icon={<MdWork/>}
                            iconStyle={{
                                background: '#181818',
                                color: 'var(--main-theme-main-color)'
                            }}  

                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                        {item.title}
                                    </h3>
                                    
                                </div>
                                <h4 className="vertical-timeline-element-company">
                                    {item.company}
                                </h4>
                                <h4 className="vertical-timeline-element-location">
                                    {item.location}
                                </h4>
                                <p>
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        ))
                    }
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">
                        Education
                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--main-theme-main-color)">
                    {
                        data.education.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__education__vertical-timeline-element"
                            contentStyle={{
                                background: 'none',
                                color: 'var(--main-theme-main-color)',
                                border: '1px solid var(--main-theme-main-color)',
                                boxShadow: '5px 10px 10px 5px #cad6f220'
                            }}
                            date={item.date}
                            icon={<FaUniversity/>}
                            iconStyle={{
                                background: '#181818',
                                color: 'var(--main-theme-main-color)'
                            }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                        {item.title}
                                    </h3>
                                </div>
                                <h4 className="vertical-timeline-element-location">
                                    {item.location}
                                </h4>
                                <p>
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        ))
                    }
                    </VerticalTimeline>
                </div>
            </div>

        </section>
    );

}

export default Resume;