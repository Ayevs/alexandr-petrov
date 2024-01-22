import "./App.css";
import { useState } from "react";
import logo from "./eva_pattern_black_symetrical.png";

export default function Navbar() {
  return (
    <nav className="Main-Nav">
      <a href="/alexandr-petrov">
        <img src={logo} />
      </a>
      <ul>
        <li>
          <a className="Nav-Button" href="/alexandr-petrov">
            HOME
          </a>
          <a className="Nav-Button" href="/alexandr-petrov/projects">
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
