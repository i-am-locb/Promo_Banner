import { useState } from "react";
import { PromoBanner } from "./PromoBanner/PromoBanner";
import { Video } from "./Video/Video";
import styles from "./VideoPlayer.module.css"

export function VideoPlayer() {
    const [showAlert, setShowAlert] = useState(false)
    const [isOpen, toggleIsOpen] = useState(false);
    return (
      <div className={styles.videoPlayer}>
        <Video isOpen={isOpen} showAlert={showAlert} setShowAlert={setShowAlert}/>
        <PromoBanner isOpen={isOpen} showAlert={showAlert} toggleIsOpen={toggleIsOpen} setShowAlert={setShowAlert}  />
      </div>
    );
  }