import styles from "./Notfound.module.css"

const NotFound = (props) => {

    const { history } = props;

    const handleGoBack = () => {
        if(localStorage.getItem("token")){
            history.push("/books")
        }else{
            history.push("/login")
        }
    };

    return (
        <div className={styles.notfound}>
            <div className={styles.wrapper}>
                <div className={styles.notfound404}>
                    <h1>
                        4<span>0</span>4
                    </h1>
                </div>
                <div className={styles.notfoundText}>
                    <p>
                        The page you are looking for might have been removed had its name
                        changed or is temporarily unavailable.
                    </p>
                </div>
                <div>
                    <button onClick={handleGoBack} className={styles.btn}>
                        Home Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound