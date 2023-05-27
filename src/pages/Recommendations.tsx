import styles from "./styles/recommendations.module.css";

const Recommendations = () => {
  return (
    <>
      <div className={styles.recommendations}>
        <div className={styles.anime}>
          <div className={styles.animeContent}>
            <div className={styles.listsTitles}>
              <h1>
                <a href="https://www.crunchyroll.com/search" target="_blank">
                  Anime
                </a>
              </h1>
            </div>
            <ul>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GYQ4MW246/naruto-shippuden"
                  target="_blank"
                >
                  Naruto Shippuden
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan"
                  target="_blank"
                >
                  Shingeki no Kyojin (Ataque dos Titãs)
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GRE50KV36/black-clover"
                  target="_blank"
                >
                  Black Clover
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super"
                  target="_blank"
                >
                  Dragon Ball Super
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GR75Q020Y/boruto-naruto-next-generations"
                  target="_blank"
                >
                  Boruto - Naruto Next Generation
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece"
                  target="_blank"
                >
                  One Piece
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia"
                  target="_blank"
                >
                  My Hero Academia
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GYP8DP1MY/jojos-bizarre-adventure"
                  target="_blank"
                >
                  JoJo Bizarre Adventure
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter"
                  target="_blank"
                >
                  Hunter x Hunter
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100"
                  target="_blank"
                >
                  Mob Psycho 100
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.music}>
          <div className={styles.musicContent}>
            <div className={styles.listsTitles}>
              <h1>
                <a href="https://open.spotify.com/" target="_blank">
                  Music
                </a>
              </h1>
            </div>
            <ul>
              <li>
                <a
                  href="https://open.spotify.com/playlist/6b2NmCZyOJYj5Fhpn13Y05?si=63472b1279404a58&pt_success=1&nd=1"
                  target="_blank"
                >
                  TRYBE TURMA 34
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF?si=a6ad7d9b327648f8"
                  target="_blank"
                >
                  TOP 50 - GLOBAL
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd?si=e47f2f2818254019"
                  target="_blank"
                >
                  RAPCAVIAR
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DX10zKzsJ2jva?si=349afa4461c64095"
                  target="_blank"
                >
                  VIVA LATINO
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DWY7IeIP1cdjF?si=4c1764f2110e4999"
                  target="_blank"
                >
                  BAILA REGGAETON
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U?si=2fb43df5e28a4630"
                  target="_blank"
                >
                  ROCK CLASSICS
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DWWMOmoXKqHTD?si=ae7ff24ba56b4bee"
                  target="_blank"
                >
                  SONGS TO SING IN THE CAR
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DX4o1oenSJRJd?si=ae5d1841d9134954"
                  target="_blank"
                >
                  ALL OUT 2000S
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe?si=647ef7335a274ec0"
                  target="_blank"
                >
                  ALL OUT 80S
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP?si=9c3d677862034b0e"
                  target="_blank"
                >
                  BEAST MODE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendations;
