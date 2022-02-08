// import { type } from "os";
// import YouTube from "react-youtube";
// import ReactPlayer from "react-player/youtube";
// import React, { useEffect, useState } from "react";

// type Props = {
//   isOpen: boolean;
//   showAlert: boolean;
//   setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export const Video: React.FC<Props> = ({ isOpen, showAlert, setShowAlert }) => {

//   const [isTubOpen, setIsTunOpen] = useState(true)

//   const onFocus = () => {
//     setIsTunOpen(true)
//   };
//   const onBlur = () => {
//     setIsTunOpen(false)
//   };
//   const onPlay = () => {
//     if (!showAlert) {
//       setTimeout(() => {
//         setShowAlert(true);
//       }, 5000);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("focus", onFocus);
//     window.addEventListener("blur", onBlur);
//     onFocus();
//     return () => {
//       window.removeEventListener("focus", onFocus);
//       window.removeEventListener("blur", onBlur);
//     };
//   }, []);
//   return (
//     <div>
//       <ReactPlayer
//         url="https://www.youtube.com/watch?v=M7FIvfx5J10"
//         height="720px"
//         width="1280px"
//         playing={!isOpen && isTubOpen}
//         controls={true}
//         onPlay={onPlay}
//       />
//     </div>
//   );
// };

import { type } from "os";
import YouTube from "react-youtube";
import ReactPlayer from "react-player/youtube";
import React, { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Video: React.FC<Props> = ({ isOpen, showAlert, setShowAlert }) => {
  const [windowIsActive, setWindowIsActive] = useState(true);

  function handleActivity(forcedFlag: any) {
    if (typeof forcedFlag === "boolean") {
      return forcedFlag ? setWindowIsActive(true) : setWindowIsActive(false);
    }
    return document.hidden ? setWindowIsActive(false) : setWindowIsActive(true);
  }

  useEffect(() => {
    const handleActivityFalse = () => handleActivity(false);
    const handleActivityTrue = () => handleActivity(true);

    document.addEventListener("visibilitychange", handleActivity);
    document.addEventListener("blur", handleActivityFalse);
    window.addEventListener("blur", handleActivityFalse);
    window.addEventListener("focus", handleActivityTrue);
    document.addEventListener("focus", handleActivityTrue);

    return () => {
      window.removeEventListener("blur", handleActivity);
      document.removeEventListener("blur", handleActivityFalse);
      window.removeEventListener("focus", handleActivityFalse);
      document.removeEventListener("focus", handleActivityTrue);
      document.removeEventListener("visibilitychange", handleActivityTrue);
    };
  }, []);

  const onPlay = () => {
    if (!showAlert) {
      setTimeout(() => {
        setShowAlert(true);
      }, 5000);
    }
  };
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=M7FIvfx5J10"
        height="720px"
        width="1280px"
        playing={!isOpen && windowIsActive}
        controls={true}
        onPlay={onPlay}
      />
    </div>
  );
};
