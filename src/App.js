import About from "./Components/About me/about";
import Navbar from "./Components/Navbar/navbar";
import Portfolio from "./Components/Portfolio/portfolio";
import Contact from "./Components/contact me/contact";
import Home from "./Components/home/home";
//import { BrowserRouter,Routes,Route } from 'react-router-dom';

<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>

      </div>
      
  );
}

export default App;
 