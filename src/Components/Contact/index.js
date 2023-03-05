import React from "react";
import {
  ContactSection,
  Title,
  Textarea,
  Div,
  InputSub,
  InputText,
  Inputsubmit,
} from "./style.js";
export default function Contact() {
  return (
    <div className="container">
      <ContactSection>
        <Title className="title">contact me</Title>
        <form action="">
          <Div>
            <InputText type="text" name="name" placeholder="your name" />
            <InputText type="email" name="email" placeholder="email" />
          </Div>
          <InputSub type="text" name="subject" placeholder="subjecte" />
          <Textarea placeholder="your message" rows="10"></Textarea>
          <Inputsubmit type="submit" value="submit" name="submit" />
        </form>
      </ContactSection>
    </div>
      
  );
}
