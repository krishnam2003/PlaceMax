
import HomePage from "./HomeComponents/HomePage";
import About from "./HomeComponents/About";
import Work from "./HomeComponents/Work";
import Feedback from "./HomeComponents/Feedback";
import Contact from "./HomeComponents/Contact";
import Footer from "./HomeComponents/Footer";



function Home() {
  
  return (
    <div className="App">
      <HomePage  />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
