import './App.css';
import Navbar from "./features/navbar/Navbar"
import Content from "./features/content/Content"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { checkauthAsync, toggleAuth, getUsersAsync } from "./features/content/login/loginSlice"


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(checkauthAsync())
      dispatch(toggleAuth(localStorage.getItem("token")))
      dispatch(getUsersAsync())
  }, [dispatch])

  return (
    <div className="App">
      <Content />
      <Navbar />
    </div>
  );
}

export default App;
