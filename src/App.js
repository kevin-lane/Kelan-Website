import './App.css';
import NavigationBar from './Components/Navigationbar/Navigationbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Projects from './Components/Projects';

function App() {
  function switchPage(){
    window.onhashchange = function(){
      window.location.reload();
    }
    
    switch (window.location.hash) {
      case '#about':
        return( <About />);
      case '#blog':
        return( <Blog /> )
      case '#contact':
        return( <Contact />);
      case '#projects':
        return( <Projects /> );
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
