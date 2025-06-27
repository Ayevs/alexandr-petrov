import "./App.css";
import { useState } from "react";
import logo from "./eva_pattern_black_symetrical.png";
import gif from "./Comp 1.gif";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="Main-Nav">
      {location.pathname === "/alexandr-petrov/projects" ? (
        <a className="gif-name" href="/alexandr-petrov">
          <img src={gif} />
        </a>
      ) : (
        <a href="/alexandr-petrov">
          <img src={logo} />
        </a>
      )}
      <ul>
        <li>
          <a className="Nav-Button" href="/alexandr-petrov">
            HOME
          </a>
          <a className="Nav-Button select" href="/alexandr-petrov/projects">
            PROJECTS
          </a>
          <a className="Nav-Button" href="https://discord.gg/RHRXHdqWEt">
            DISCORD
          </a>
        </li>
      </ul>
    </nav>
  );
}
