//CSS
import "./ChangePass.module.css";
//React/Redux
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//External Components
import { changePasswordAsync, selectLoading } from "../login/loginSlice";
import Loading from "../loading/Loading";

const ChangePass = (props) => {
  //Dispatch
  const dispatch = useDispatch();
  //Selectors
  const isLaoding = useSelector(selectLoading);
  //State
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <>
      <div style={{ marginTop: "20vh" }}>
        <div className="card-3d-wrap mx-auto">
          <div className="card-3d-wrapper">
            <div className="card-front">
              <div className="center-wrap">
                <div className="section text-center">
                  <h4 className="mb-4">Reset password</h4>
                  <div className="form-group">
                    <div className="wrapper"></div>
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
                      placeholder="New Password"
                      autoComplete="off"
                      value={password1}
                      onChange={(e) => setPassword1(e.target.value)}
                    />
                    <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      className="form-style"
                      placeholder="Repeat new password"
                      autoComplete="off"
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                    <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  {password1 && password2 && password1 !== password2 && (
                    <div style={{ color: "red" }}>Password mismatch</div>
                  )}
                  <button
                    className="butn mt-4"
                    onClick={() =>
                      dispatch(
                        changePasswordAsync({
                          email,
                          password: password2,
                        })
                      ).then((res) => {
                        if (res.meta.requestStatus === "fulfilled") {
                          props.history.push("/");
                        }
                      })
                    }
                    disabled={
                      !email ||
                      !password1 ||
                      !password2 ||
                      !(password1 === password2)
                    }
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLaoding && <Loading />}
    </>
  );
};
export default ChangePass;
