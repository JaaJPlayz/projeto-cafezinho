import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.siteLogo}>
          <img src="/image/logo.jpg" alt="logo" />
          <h1>Hello, café!</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
