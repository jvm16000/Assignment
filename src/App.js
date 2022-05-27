import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Mainpage from './Components/Mainpage';
import AccordionComponent from "./Components/Accordion";

function App() {
  return (
    <div className="App">
      <Header />
      <Mainpage />
      {/* <AccordionComponent /> */}
    </div>
  );
}

export default App;
