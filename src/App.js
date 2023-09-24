import './App.css';
import Aboutus from './components/Aboutus';
import About from './components/About';
import {Home} from './components/Home.js';
import Newuser from './components/Newuser.jsx';

function App() {
  return (
    <div className="App">
      <Home />
      <Aboutus />
      <About />
      <Newuser />
    </div>
  );
}

export default App;
