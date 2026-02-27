import { motion } from "motion/react";
import { Music, Pause } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

export default function MusicPlayer({
  isPlaying,
  togglePlay,
}: MusicPlayerProps) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-wedding-red text-white rounded-full flex items-center justify-center shadow-lg hover:bg-wedding-red/90 transition-colors"
      aria-label="Toggle music"
    >
      {isPlaying ? (
        <Pause className="w-5 h-5" />
      ) : (
        <Music className="w-5 h-5" />
      )}

      {isPlaying && (
        <span className="absolute inset-0 rounded-full border-2 border-wedding-red animate-ping opacity-75" />
      )}
    </motion.button>
  );
}
