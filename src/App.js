import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Mainpage from './Components/Mainpage';
import Card from './Components/Card';
import AccordionComponent from "./Components/Accordion";

function App() {
  return (
    <div className="App">
      <Header />
      <Mainpage />
      {/* <Card /> */}
      {/* <AccordionComponent /> */}
    </div>
  );
}

export default App;
