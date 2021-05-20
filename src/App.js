import './App.css';
import NavigationBar from './Components/Navigationbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Projects from './Components/Projects';

function App() {
  function switchPage(){
    switch (window.location.pathname) {
      case '/portfolio/about':
        return( <About />);
      case '/portfolio/blog':
        return( <Blog /> )
      case '/portfolio/contact':
        return( <Contact />);
      case '/portfolio/projects':
        return( <Projects /> );
        case '/portfolio':
          return( <Home /> );
      default:
        return(<Home />);
    }
  }

  return (
    <div className="App">
      <NavigationBar className="Navbar" /> 
          {switchPage()}
          <footer><p>&copy; {new Date().getFullYear()} Copyright: Kevin Lane</p></footer>
    </div>
  );
}

export default App;
