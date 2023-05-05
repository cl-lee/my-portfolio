import "./styles/Footer.css";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="d-flex">
        <li>
          <a
            href="https://www.linkedin.com/in/chung-lai-lee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="linkedin"
              className="px-3"
              src={linkedinIcon}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/cl-lee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="github"
              className="px-3"
              src={githubIcon}
              alt="GitHub icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
