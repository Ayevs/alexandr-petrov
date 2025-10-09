import "../App.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <h1 className="text-2xl font-semibold font-bold ">404</h1>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
