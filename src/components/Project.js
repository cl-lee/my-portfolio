import React from "react";

export default function Project(props) {
  return (
      <section>
        <h1>{props.title}</h1>
        <p>
          Deployed version: <a href={props.deployedLink}>{props.deployedLink}</a>
        </p>
        <p>
          GitHub repository: <a href={props.githubLink}>{props.githubLink}</a>
        </p>
        <img alt={props.title} src={process.env.PUBLIC_URL + props.image} />
      </section>
    );
}