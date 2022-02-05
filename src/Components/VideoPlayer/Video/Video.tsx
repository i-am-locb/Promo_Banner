import { type } from "os";
import YouTube from "react-youtube";

export function Video() {

  const onPlayerReady = (event:any) => {
    console.log(event.target)
  }
  
  return (
    <div>
      <YouTube
        videoId="M7FIvfx5J10"
        opts={{
          height: "720px",
          width: "1280px",
          playerVars: {
            autoplay: 0,  //автовоспроизведение
            iv_load_policy: 3, //отключение аннотаций
            modestbranding: 1, //убрать кнопку YouTube
            showinfo: 0,
          },
        }}
        onReady={onPlayerReady}
      />
    </div>
  );
}
