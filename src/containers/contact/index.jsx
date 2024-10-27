import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import "./styles.scss";

const Contact =()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const emailTemplateParams = {
        from_name: name,
        reply_to: email,
        message: body
        };

    const sendEmail = () => {
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, emailTemplateParams,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
          .then((result) => {
            setShowSuccessModal(true);
          }, (error) => {
              setShowErrorModal(true);
          });
      };

      const handleClose = () => {
        setShowSuccessModal(false);
        setShowErrorModal(false);
      };

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
                                <input required name="name" className="inputName" type="text" onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div className="email-wrapper">
                                <input required name="email" className="inputEmail" type="text" onChange={(e) => setEmail(e.target.value)}/>
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div className="body-wrapper">
                                <textarea required name="body" className="inputBody" type="text" rows={12} onChange={(e) => setBody(e.target.value)}/>
                                <label htmlFor="body" className="bodyLabel">Message</label>
                            </div>
                        </div>
                    </div>
                    <button onClick={sendEmail}>Submit</button>
                </Animate>
            </div>

            {showSuccessModal && (
                <div className={`modal ${showSuccessModal ? 'show' : ''}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleClose}>&times;</span>
                            <h1>Success!</h1>
                        </div>
                        <div className="modal-body">
                            <p>Message successfully sent.</p>
                            <p>Thank you for taking the time to appreciate the site. I will be sure to get back to you at the earliest.</p>
                        </div>
                    </div>
                </div>
            )}

            {showErrorModal && (
                <div className={`modal ${showErrorModal ? 'show' : ''}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleClose}>&times;</span>
                            <h1>Error!</h1>
                        </div>
                        <div className="modal-body">
                            <p>Sorry, an error occurred when sending the message.</p>
                            <p>Please try again, if error persists please contact me directly at: jacob.b.lafond@gmail.com</p>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );

}

export default Contact;