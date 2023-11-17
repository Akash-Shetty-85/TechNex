import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Collection from "./Components/Offer_section";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <header>
        <Navbar />
      </header>
      <section>
        <article>
         <Collection/> 
        </article>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
