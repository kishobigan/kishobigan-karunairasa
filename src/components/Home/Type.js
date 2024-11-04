import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Software Engineer",
          "Data Scientist",
            "ML Engineer",
            "Project Manager",
            "Data Analyst",
            "Technical Consultant"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
