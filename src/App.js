import Aboutus from './components/Aboutus.js';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import {Home} from './components/Home.js';
import Newuser from './components/Newuser.jsx';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Aboutus />
      <About />
      <Newuser />
    </div>
  )

}
export default App;
