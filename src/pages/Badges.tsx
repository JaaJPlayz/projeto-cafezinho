import styles from "./styles/badges.module.css";

const Badges = () => {
  return (
    <>
      <div className={styles.badges}>
        <h1>Conquered Badges</h1>
        <div className={styles.badgesContent}>
          <div className={styles.badgeStand}>
            <img src="/image/jason-icon.png" alt="jason-icon" width={"50px"} />
          </div>

          <div className={styles.badgeStand}>
            <img src="/image/mario-icon.png" alt="mario-icon" width={"50px"} />
          </div>

          {Array.from({ length: 34 }).map((_, index) => (
            <div key={index} className={styles.badgeStand}>
              <img
                src="/image/question-mark.png"
                alt="question-mark"
                width={"50px"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Badges;
