import { Link } from "react-router-dom";

import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.siteLogo}>
          <img src="/image/logo.jpg" alt="logo" />
          <h1>Hello, café!</h1>
        </div>
        <div className={styles.navLinks}>
          <Link to={"/"}>Home</Link>
          <Link to={"/timer"}>Timer</Link>
          <Link to={"/recommendations"}>Recommendations</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
