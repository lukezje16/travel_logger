import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={styles.logoContainer}>
      <div className={styles.logoTextContainer}>
        <img
          src="../../public/images/icon.png"
          alt="WorldWise logo"
          className={styles.logo}
        />
        <span className={styles.text}>Travel Logger</span>
      </div>
    </Link>
  );
}

export default Logo;
