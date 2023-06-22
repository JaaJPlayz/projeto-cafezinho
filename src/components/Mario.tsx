import { useState } from "react";
import styles from "./styles/mario.module.css";

const Mario = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const audio = new Audio("/audio/mario-jump.mp3");
    audio.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <audio src="/audio/mario-jump.mp3"></audio>
      <div
        className={styles.mario}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={isHovered ? "/image/jump-mario.png" : "/image/idle-mario.png"}
          alt="Mario"
        />
      </div>
    </>
  );
};

export default Mario;
