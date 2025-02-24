import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from "react-router-dom";

import "./styles.scss";

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate("/contact")
    }

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello! I'm Jacob Lafond,
                    <br />
                    Software Engineer
                </h1>
            </div>
            <Animate
            play
            duration={1}
            delay={.75}
            start={{
                transform : "translateY(550px)"
            }}
            end={{
                transform : "translateY(0px)"
            }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Let's talk</button>
                </div>
                <div className="home__social">
                    <Link to="https://www.linkedin.com/in/jacob-lafond/" className="home__social__icons">
                        <FaLinkedinIn size={30} />
                    </Link>
                    <Link to="https://github.com/jlafond" className="home__social__icons">
                        <FaGithub size={30} />
                    </Link>
                    <Link to="https://www.instagram.com/jacoblafond/" className="home__social__icons">
                        <FaInstagram size={30} />
                    </Link>
                    <Link to="https://x.com/_jacobLafond" className="home__social__icons">
                        <FaXTwitter size={30} />
                    </Link>
                </div>
            </Animate>
        </section>
    );

}

export default Home;