// src/components/About.js

import React from "react";
import { CodeIcon} from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const LinkedInIconLink = ({ profileUrl }) => {
  return (
    <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
    </a>
  );
};
export default function Contact() {
  const linkedInProfileUrl = "https://www.linkedin.com/in/brittanyrogers-broeckel";
  return (
    
    <section id="contact" className="bg-gray-900 text-white py-16">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <CodeIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
          Connect &amp; Collaborate
        </h1>
      </div>
      <div className="flex flex-wrap lg:w-4/5 mx-auto">
        <div className="p-6 md:w-1/2 lg:mr-8 mb-8 md:mb-0">
          <h2 className="title-font sm:text-3xl text-3xl mb-4 font-sm text-white">
          <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300"> 
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-300"/> Visit My LinkedIn Profile{' '}</a>
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Connect with me on LinkedIn to stay updated on my professional journey.
          </p>
        </div>

        <div className="md:w-1/2">
          <h2 className="title-font sm:text-3xl text-3xl font-sm text-white mb-4">
            <a href="mailto:rogers.codedesign@gmail.com" className=" text-white hover:text-blue-300"> 
            <FontAwesomeIcon icon={faEnvelope} className="hover:text-blue-300"/>  Send a Message{' '}</a>
          </h2>
          <p className="text-gray-400 mb-4">
            Feel free to reach out via email. I'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  </section>
);
};

   