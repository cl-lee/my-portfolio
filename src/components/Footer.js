import "./styles/Footer.css";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer id="portfolio-footer">
      <ul>
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
