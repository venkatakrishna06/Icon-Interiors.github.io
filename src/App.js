import './App.css';
import NavBar from "./components/NavBar/navBar";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
<NavBar></NavBar>
        <About></About>
        <Projects></Projects>
        <Testimonials></Testimonials>
    </div>
  );
}

export default App;
