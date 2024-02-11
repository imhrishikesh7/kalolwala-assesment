import './App.css';
import { Clients } from './components/Clients';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Hero2 } from './components/Hero2';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App ">          
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
