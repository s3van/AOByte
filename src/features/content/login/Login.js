import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import "./Login.css"
import {
    loginAsync,
    registrationAsync,
    selectLoading,
} from "./loginSlice";

const Login = (props) => {

    const isLoading = useSelector(selectLoading);

    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitData = () => {
        const { history } = props
        dispatch(loginAsync({ email, password, history }))
        // setEmail("")
        // setPassword("")
    }

    if (isLoading) {
        return (<div style={{ marginTop: '100px', color: "black" }}>Loading...</div>)
    }
    return (
        <div className="wrapper">
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <div className="form-group">
                                                        <div className="wrapper">

                                                        </div>
                                                        <input
                                                            type="email"

                                                            className="form-style"
                                                            placeholder="Your Email"
                                                            autoComplete="off"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="password"

                                                            className="form-style"
                                                            placeholder="Your Password"
                                                            autoComplete="off"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button
                                                        disabled={password === ""}
                                                        className="btn mt-4"
                                                        onClick={() => submitData()}
                                                    >Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Sign Up</h4>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="email"
                                                            name="logemail"
                                                            className="form-style"
                                                            placeholder="Your Email"
                                                            autoComplete="off"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="password"
                                                            name="logpass"
                                                            className="form-style"
                                                            placeholder="Your Password"

                                                            autoComplete="off"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button
                                                        disabled={password === ""}
                                                        className="btn mt-4"
                                                        onClick={() => dispatch(registrationAsync({ email, password }))}
                                                    >Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login