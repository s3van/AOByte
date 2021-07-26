import './App.css';
import Navbar from "./features/navbar/Navbar"
import Content from "./features/content/Content"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { checkauthAsync } from "./features/content/login/loginSlice"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkauthAsync())
    }
  }, [])

  return (
    <div className="App">
      <Content />
      <Navbar />
    </div>
  );
}

export default App;
