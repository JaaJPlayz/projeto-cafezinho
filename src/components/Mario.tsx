import styles from "./styles/mario.module.css";
const Mario = () => {
  return (
    <>
      <div className={styles.mario}>
        <img
          src="/image/bigMario.png"
          alt="Mario"
          className={styles.marioImage}
        />
        <img src="/image/marioPipe.png" alt="" className={styles.pipe} />
      </div>
    </>
  );
};

export default Mario;
