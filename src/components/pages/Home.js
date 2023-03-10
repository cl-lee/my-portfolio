import React from "react";
import "./styles/Home.css";

// Renders HTML for home page
function Home() {
  return (
    <div className="p-4">
      <h1>Chung Lai Lee</h1>
      <h2>Front End Web Developer</h2>
      <h3>
        Welcome to my webpage! You can find information about me and my
        projects here!
      </h3>
      <p>
        I am a front end web developer with an interest in problem solving. I
        love to build apps that makes life a bit more fun and easier for everyone!
      </p>
      <p>
        Skills: Working knowledge of HTML, CSS, Bootstrap, Javascript, ES6,
        JQuery, Node.js, ReactJS, APIs, source control, test driven & behavior
        driven development, and Visual Studio
      </p>
      <p>
        CV: A copy of my CV can be found here:{" "}
        <a href="https://drive.google.com/file/d/1IZpGdNwzV9zR1Gp4nW3AcZO0-y6eAi7G/view?usp=sharing">
          My CV
        </a>
      </p>
    </div>
  );
}

export default Home;
