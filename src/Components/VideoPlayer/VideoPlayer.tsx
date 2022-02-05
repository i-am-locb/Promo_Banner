import { PromoBanner } from "./PromoBanner/PromoBanner";
import { Video } from "./Video/Video";

export function VideoPlayer() {
    return (
      <div>
        <Video />
        <PromoBanner />
      </div>
    );
  }