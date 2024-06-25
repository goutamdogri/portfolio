import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <header className="font-normalText fixed z-20 ">
        <Navbar />
      </header>

      <main className="font-normalText pt-20 sideMenuHide">
        <Home />
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>

      <footer className="font-normalText sideMenuHide">
        <Footer />
      </footer>
    </>
  );
}

export default App;
