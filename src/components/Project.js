import React from "react";
import "./styles/Project.css"

export default function Project(props) {
  return (
      <section className="project-instance">
        <h2 className="text-center">{props.title}</h2>
        <img className="d-block mx-auto" alt={props.title} src={process.env.PUBLIC_URL + props.image} />
        <p className="m-1 text-center">
          Deployed link: <a href={props.deployedLink}>{props.deployedLink}</a>
        </p>
        <p className="m-1 text-center">
          GitHub repository link: <a href={props.githubLink}>{props.githubLink}</a>
        </p>
      </section>
    );
}