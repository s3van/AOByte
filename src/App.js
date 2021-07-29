import './App.css';
import Navbar from "./features/navbar/Navbar"
import Content from "./features/content/Content"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { checkauthAsync, toggleAuth } from "./features/content/login/loginSlice"


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkauthAsync())
      dispatch(toggleAuth(true))
    }
    if(!localStorage.getItem("token")){
      dispatch(toggleAuth(false))
    }
    
  }, [dispatch])

  return (
    <div className="App">
      <Content />
      <Navbar />
    </div>
  );
}

export default App;
