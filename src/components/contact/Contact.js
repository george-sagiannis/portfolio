import React, { useEffect } from "react";
import "./contact.css";
import Social from "../home/Social";

const Contact = () => {
  useEffect(() => {
    const header = document.querySelector('.social-header');
    const text = header.textContent;
    const splitText = text.split('');
    header.textContent = '';

    for (let i = 0; i < splitText.length; i++) {
      header.innerHTML += `<span>${splitText[i] === ' ' ? '&nbsp;' : splitText[i]}</span>`;
    }

    const spans = header.querySelectorAll('span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.animation = 'slideIn 0.4s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        span.style.animationDelay = `${index * 150}ms`;
      }, 1000);
    });
  }, []);

  return (
    <div className="contact-container" id="contact">
      <h1 className="social-header">Connect with me on social media</h1>
      <Social />
    </div>
  );
};

export default Contact;
