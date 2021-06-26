import "./App.css";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Content/>
      </BrowserRouter>
    </div>
  );
}

export default App;
