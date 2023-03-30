import Telephone from "../../assets/telephone.png";
import HeadingOnePrimary from "../../core-components/headings/heading-one-primary/heading-one-primary.component";
import "./contact-us.styles.scss";
import InputTextPrimary from "../../core-components/Input/input-text-primary/input-text-primary.component";
import { useState } from "react";
import ButtonPrimary from "../../core-components/buttons/button-primary/button-primary.component";
import ButtonSecondary from "../../core-components/buttons/button-secondary/button-secondary.component";
import TextAreaPrimary from "../../core-components/text-area/text-area-primary/text-area-primary.component";
import emailjs from "@emailjs/browser";
import PopupMessage from "../../core-components/popup-message/popup-message.component";

const ContactUs = () => {
  const contactUsObj = {
    name: "",
    emailid: "",
    subject: "",
    message: "",
    phone: "",
  };
  const [contactUs, setContactUs] = useState(contactUsObj);
  const [showMessage, setShowMessage] = useState(false);
  const { name, emailid, subject, message, phone } = { ...contactUs };
  // setShowMessage(false);
  const onValueChange = (event) => {
    const { name, value } = event.target;
    setContactUs({ ...contactUs, [name]: value });
  };
  const onHandleReset = (event) => {
    setContactUs(contactUsObj);
  };
  const onHandleSubmit = (event) => {
    event.preventDefault();
    // setShowMessage(true);
    // setTimeout(() => {
    //   setShowMessage(false);
    // }, 2000);
    emailjs
      .send(
        "service_h0m3tzr",
        "template_3o87lcl",
        contactUs,
        "50WmMa50sClJWY8l0"
      )
      .then((response) => {
        console.log(response);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
        setContactUs(contactUsObj);
      })
      .catch((exception) => {
        console.log(exception);
      });
  };
  return (
    <div className="contactus-root-container">
      {showMessage && (
        <PopupMessage
          onCloseMessage={(event) => {
            setShowMessage(false);
          }}
        >
          Message sent successfully !!!
        </PopupMessage>
      )}
      <HeadingOnePrimary className="contactus-heading">
        Contact Me
      </HeadingOnePrimary>
      <div className="contactus-body-container">
        <img
          src={Telephone}
          alt="contact page image"
          className="contact-image"
        />
        <form
          onSubmit={onHandleSubmit}
          onReset={onHandleReset}
          className="contactus-form-container"
        >
          <InputTextPrimary
            id="name"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={onValueChange}
          ></InputTextPrimary>
          <InputTextPrimary
            id="emailid"
            name="emailid"
            placeholder="Email"
            type="email"
            required
            value={emailid}
            onChange={onValueChange}
          ></InputTextPrimary>
          <InputTextPrimary
            id="phone"
            name="phone"
            placeholder="Phone"
            type="phone"
            value={phone}
            onChange={onValueChange}
          ></InputTextPrimary>
          <InputTextPrimary
            id="subject"
            name="subject"
            required
            placeholder="Subject"
            value={subject}
            onChange={onValueChange}
          ></InputTextPrimary>
          <TextAreaPrimary
            id="message"
            name="message"
            required
            placeholder="Message"
            value={message}
            onChange={onValueChange}
          ></TextAreaPrimary>
          <div className="contactus-btn-group">
            <ButtonPrimary type="submit">Send Message</ButtonPrimary>
            <ButtonSecondary type="reset">Reset</ButtonSecondary>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
