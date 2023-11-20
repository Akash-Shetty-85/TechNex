import "./App.css";

import Footer from "./Components/Footer";
import Hero from "./Components/Hero_section";
import Methods from "./Components/Methods";
import Navbar from "./Components/Navbar";
import Collection from "./Components/Offer_section";
import PopularItmes from "./Components/Popular_items";
import WorkSection from "./Components/WorkSection";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <header>
        <Navbar />
      </header>
      <section>
        <article>
          <Hero />
        </article>
        
        <article>
          <WorkSection />
        </article>
        <article>
          <PopularItmes />
        </article>
        {/*  */}
        <article>
          <Methods />
        </article>
        <article>
          <Collection />
        </article>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
