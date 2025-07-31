import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App-Div">
        <h2>Welcome to my first website i've created for myself.</h2>
        <p>
          Im a 20 year old dev who has some experience in web dev/ object
          oriented programming and mobile development, as well as a couple other
          things.
        </p>
        <p>
          Im still working on developing this website, but due to my spontaneous
          style of working it will probably take a bit
        </p>
        <p>
          If you are curious or would like to keep in touch feel free to join my
          discord server.
        </p>
        <iframe
          src="https://discord.com/widget?id=1198787717459349524&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
