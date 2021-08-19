//CSS
import styles from "./Navbar.module.css";
//Components
import Search from "../content/search/Search"
//React/Redux
import { useSelector, useDispatch } from 'react-redux';
//Slices
import { selectAuth, logoutAsync } from "../content/login/loginSlice"
//External Components
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
    //Dispatch
    const dispatch = useDispatch();
    //Selectors
    const isAuth = useSelector(selectAuth);
    //Functions
    const submitData = () => {
        const { history } = props
        dispatch(logoutAsync({ history }))
    }
    //Styles
    const cls = [styles.logo];
    if (isAuth === null) {
        cls.push(styles.unAuthLogo);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.tools}>
                <div className={cls.join(" ")}>
                    <div>
                        <span className={styles.lib}>Lib</span>
                        <span className={styles.guide}>Guide</span>
                    </div>
                </div>
                {isAuth && <div className={styles.logout}>
                    <button
                        className={styles.lgtBtn}
                        onClick={() => submitData()}>
                        Logout
                    </button>
                </div>}
            </div>
            {isAuth && <div className={styles.searchWrap}>
                <div className={styles.search}>
                    <Search />
                </div>
            </div>}
        </div>
    );
}


export default withRouter(Navbar);