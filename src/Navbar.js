import "./App.css";
import logo from "./eva_pattern_black_symetrical.png";
import gif from "./Comp1.gif";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="Main-Nav">
      {location.pathname === "/alexandr-petrov/projects" ? (
        <Link className="gif-name" href="/alexandr-petrov">
          <img src={gif} alt="Animated logo" />
        </Link>
      ) : (
        <Link to="/">
          <img src={logo} alt="Static logo" />
        </Link>
      )}
      <ul>
        <li>
          <Link className="Nav-Button" to="/">
            HOME
          </Link>
          <Link className="Nav-Button select" to="/projects">
            PROJECTS
          </Link>
          <a className="Nav-Button" href="https://discord.gg/RHRXHdqWEt">
            DISCORD
          </a>
        </li>
      </ul>
    </nav>
  );
}
