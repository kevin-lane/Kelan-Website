import './App.css';
import NavigationBar from './Components/Navigationbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';

function App() {
  function switchPage(){
    switch (window.location.pathname) {
      case '/about':
        return( <About />);
      case '/blog':
        return( <Blog /> )
      case '/contact':
        return( <Contact />);
      case '/portfolio':
        return( <Portfolio /> )
      default:
        return(<Home />);
    }
  }

  return (
    <div className="App">
      <NavigationBar className="Navbar" /> 
          {switchPage()}
    </div>
  );
}

export default App;
