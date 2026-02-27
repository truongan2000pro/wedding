import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import WelcomeCover from "./components/WelcomeCover";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=romantic-piano-112135.mp3",
    );
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((e) => console.log("Audio play failed:", e));
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <WelcomeCover onOpen={handleOpen} />
      <main
        className={`min-h-screen bg-wedding-bg font-sans selection:bg-wedding-red selection:text-white ${
          !isOpened ? "h-screen overflow-hidden" : ""
        }`}
      >
        <Hero />
        <Invitation />
        <Events />
        <Gallery />
        <Footer />
        {isOpened && (
          <MusicPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
        )}
      </main>
    </>
  );
}
