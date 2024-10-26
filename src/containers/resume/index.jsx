import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";
import { MdWork } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';


const Resume =()=>{

    return(
        <section id="resume" className="resume">
             <PageHeaderContent headerText="My Resume"/>

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
                                border: '1.5px solid var(--main-theme-main-color)'
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
                                border: '1.5px solid var(--main-theme-main-color)'
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