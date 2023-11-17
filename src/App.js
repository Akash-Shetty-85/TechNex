import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <header>
        <Navbar />
      </header>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
