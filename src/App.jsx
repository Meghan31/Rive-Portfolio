import "./app.scss";
import Details from "./components/hero/Details";
import Face from "./components/rive/home/Face";
import Navbar from "./components/navbar/navbar";
import Parallax from "./parallax/Parallax";
import { Educationexample } from "./education/Education";
import { Education } from "./education/Education1";
import Untitled from "./components/rive/untitled";
// import Projects from "./projects/Projects";

const App = () => {
  return (
    <div>
      <section id="Home" style={{ height: "100vh" }}>
        <Navbar />
        <div id="profile">
          <div className="face">
            <Face />
          </div>
          <Details />
        </div>
      </section>
      <section id="Parallax" style={{ height: "100vh" }}>
        <div className="bgimage"></div>
      </section>
      <section style={{ height: "100vh" }}>
        <Parallax />
      </section>
      <section style={{ height: "100vh" }}>
        <Education />
      </section>
      <section style={{ height: "200vh" }}>
        <Educationexample />
      </section>
      <section style={{ height: "300vh" }}>
        <Untitled />
      </section>
      <section style={{ height: "100vh" }}></section>

      {/* <section id="About">
        <div>
          <Projects />
        </div>
      </section> */}
      {/*<section id="Projects">Projects</section>
      <section id="Experience">Experience</section>

      <section id="Contact">Contact</section>
      <section id=""></section> */}
    </div>
  );
};

export default App;
