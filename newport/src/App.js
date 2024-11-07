import { NavBar } from "./component/navbar/NavBar";
import  Intro from "./component/Intro/Intro";
import Skills from './component/skills/skills';
import Works from "./component/works/works";
import Contact from "./component/contact/contact";
import Footer from './component/footer/footer';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
