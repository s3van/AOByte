//CSS
import "./Login.css"
//React/Redux
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
//Slices
import {
    //ASYNC FUNCTIONS
    loginAsync, registrationAsync, changePassLinkAsync,
    //SELECTORS
    selectServerLoginError, selectServerRegistrationError,
    selectChangePassModal, selectAccessModal, selectLoading,
    //TOGGLE FUNCTIONS
    toggleAccessModal, toggleChangePassModal,
} from "./loginSlice";
//External Components
import AccessModal from "../modals/accessmodal/AccessModal"
import ChangePassModal from "../modals/changepassmodal/ChangePassModal"
import { emailValidator, maxLengthValidator, minLengthValidator } from "../../../utils/validators"
import Loading from "../loading/Loading"

const Login = (props) => {
    //Props
    const { history } = props
    //Dispatch
    const dispatch = useDispatch();
    //Selectors
    const serverLoginError = useSelector(selectServerLoginError)
    const serverRegistrationError = useSelector(selectServerRegistrationError)
    const accessModal = useSelector(selectAccessModal)
    const changePassModal = useSelector(selectChangePassModal)
    const isLoading = useSelector(selectLoading)
    //State
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    //Functions
    const maxlength30 = maxLengthValidator(30);
    const minlength30 = minLengthValidator(5);
    const validationEmail = (email) => {
        setEmail(email)
        let emailError = (
            maxlength30(email) ||
            minlength30(email) ||
            emailValidator(email));
        if (emailError) {
            setEmailError(emailError)
        } else {
            setEmailError("")
        }
    }
    const validationPassword = (password) => {
        setPassword(password)
        let passwordError = (
            maxlength30(password) ||
            minlength30(password));
        if (passwordError) {
            setPasswordError(passwordError)
        } else {
            setPasswordError("")
        }

    }

    return (
        <>
            <div className="wrapper">
                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 className="mb-0 pb-3"><span>Log In</span><span>Sign Up</span></h6>
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                    <label htmlFor="reg-log"></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4">Log In</h4>
                                                        <div className="form-group">
                                                            <div className="wrapper">

                                                            </div>
                                                            <input
                                                                type="email"
                                                                className="form-style"
                                                                placeholder="Your Email"
                                                                autoComplete="off"
                                                                value={email}
                                                                onChange={(e) => validationEmail(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-at"></i>
                                                            {emailError && email && <div className="validDiv">{emailError}</div>}
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="password"
                                                                className="form-style"
                                                                placeholder="Your Password"
                                                                autoComplete="off"
                                                                value={password}
                                                                onChange={(e) => validationPassword(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                            {passwordError && password && <div className="validDiv">{passwordError}</div>}
                                                            {serverLoginError && <span style={{ color: "red" }}>{serverLoginError.message}</span>}
                                                            <div className="forgetBtnWrap">
                                                                <button className="forgetBtn"
                                                                    onClick={() => dispatch(toggleChangePassModal())}>
                                                                    Forgot password ?
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <button
                                                            disabled={!password || !email || emailError || passwordError}
                                                            className="butn mt-4"
                                                            onClick={() => dispatch(loginAsync({ email, password, history }))}
                                                        >Login</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-4">Sign In</h4>
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                name="logemail"
                                                                className="form-style"
                                                                placeholder="Your Email"
                                                                autoComplete="off"
                                                                value={email}
                                                                onChange={(e) => validationEmail(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-at"></i>
                                                            {emailError && email && <div className="validDiv">{emailError}</div>}
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="password"
                                                                name="logpass"
                                                                className="form-style"
                                                                placeholder="Your Password"
                                                                autoComplete="off"
                                                                value={password}
                                                                onChange={(e) => validationPassword(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                            {passwordError && password && <div className="validDiv">{passwordError}</div>}
                                                            {serverRegistrationError && <span style={{ color: "red" }}>{serverRegistrationError.message}</span>}
                                                        </div>
                                                        <button
                                                            disabled={!password || !email || emailError || passwordError}
                                                            className="butn mt-4"
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
            {accessModal && <AccessModal
                onHide={(param) => dispatch(toggleAccessModal(param))} />}
            {changePassModal && <ChangePassModal
                onHide={() => dispatch(toggleChangePassModal())}
                onSubmit={(email) => dispatch(changePassLinkAsync({ email }))} />}
            {isLoading && <Loading />}
        </>
    )
}

export default Login