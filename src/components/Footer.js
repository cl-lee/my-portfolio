import "./styles/Footer.css";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="d-flex">
        <li>
          <img id="github" src={githubIcon} alt="GitHub icon" />
        </li>
        <li>
          <img id="linkedin" src={linkedinIcon} alt="LinkedIn icon" />
        </li>
      </ul>
    </footer>
  );
}
