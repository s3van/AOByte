import styles from "./Home.module.css"
import { useSelector, useDispatch } from 'react-redux';
import {useEffect } from "react"
import {
    logoutAsync,
    selectAuth,
    toggleAuth,
    getusersAsync
} from "../login/loginSlice";

const Home = (props) => {
    

    const isAuth = useSelector(selectAuth);

    const dispatch = useDispatch();

    const submitData = () => {
        const { history } = props
        dispatch(logoutAsync({ history }))

    } 

    useEffect(() => {
        const token = localStorage.getItem("token")
       if (token) {
        dispatch(toggleAuth(true))
      }
      if(!token){
        dispatch(toggleAuth(false))
      }
      }, [])


    return(
        <div className={styles.wrapper}>
            <h1>Home</h1>
            <div>{isAuth && <button onClick={() => submitData()}>Logout</button>}</div>
            <div>{isAuth && <button onClick={() => dispatch(getusersAsync())}>Get</button>}</div>
            <div>{isAuth ? <h1>User Logged in</h1>: <h1>Please log</h1>}</div>
        </div>
    )
}

export default Home