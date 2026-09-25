import "../App.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ASCIIText from "../cool-components/ASCIIText";

function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <ASCIIText text="404" enableWaves={true} asciiFontSize={7} />
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
