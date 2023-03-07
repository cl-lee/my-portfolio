import React from "react";
// probably doesn't belong to this component

// Add Router here
// Add Route paths to all projects?

// user select -> setState

// function

// props: which index of array?



export default function Project(props) {
  return (
    // <Router basename="project-gallery">
    // {/* drop down menu to select project here */}
    //     <Routes>
    //         <Route path="/" element={<renderProject />} />
    //        </Routes>
    // </Router>
      <section>
        <h1>{props.title}</h1>
        <p>
          Deployed version: <a href={props.deployedLink}>{props.deployedLink}</a>
        </p>
        <p>
          GitHub repository: <a href={props.githubLink}>{props.githubLink}</a>
        </p>
        <img alt={props.title} src={props.image} />
      </section>
    );
}

// function RenderProject(props) {
//   return (
//     <section>
//       <h1>{props.title}</h1>
//       <p>
//         Deployed version: <a href={props.deployedLink}>{props.deployedLink}</a>
//       </p>
//       <p>
//         GitHub repository: <a href={props.githubLink}>{props.githubLink}</a>
//       </p>
//       <img alt={props.title} src={props.image} />
//     </section>
//   );
// }

// drop down menu to select project
// function SelectProject()


// if user select project 1, route to project 1 page and render information
// etc. for all projects