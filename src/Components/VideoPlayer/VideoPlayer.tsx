import { PromoBanner } from "./PromoBanner/PromoBanner";
import { Video } from "./Video/Video";
import styles from "./VideoPlayer.module.css"

export function VideoPlayer() {
    return (
      <div className={styles.videoPlayer}>
        <Video />
        <PromoBanner />
      </div>
    );
  }