import { type } from "os";
import YouTube from "react-youtube";
import ReactPlayer from "react-player/youtube";

type Props = {
  isOpen: boolean;
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Video: React.FC<Props> = ({
  isOpen,
  showAlert,
  setShowAlert,
}) => {
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
        playing={!isOpen}
        controls={true}
        onPlay={onPlay}
      />
    </div>
  );
};
