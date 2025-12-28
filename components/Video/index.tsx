"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import styles from "./styles.module.scss";

interface VideoProps {
  videoUrl?: string;
}

const Video = ({ videoUrl = "/videos/sample.mp4" }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleError = () => setHasError(true);

    if (video) {
      video.addEventListener("error", handleError);
    }

    return () => {
      if (video) {
        video.removeEventListener("error", handleError);
      }
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch((error) => {
          console.error("Error playing video:", error);
          setHasError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <section className={`${styles.videoSection} relative overflow-hidden`}>
      <div>
        {/* Video Container */}
        <div className="relative w-full bg-slate-900/50 shadow-lg backdrop-blur-sm border border-slate-800/50 rounded-lg overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-900/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/80 to-transparent z-10 pointer-events-none"></div>

          {/* Video Element */}
          <div className={styles.videoContainer}>
            {hasError ? (
              <div className="w-full h-full flex items-center justify-center bg-slate-800/50">
                <div className="text-center">
                  <p className="text-red-400 mb-2">Unable to load video</p>
                  <p className="text-gray-400 text-sm">
                    Please check the video URL or file path
                  </p>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                playsInline
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
            <button
              onClick={handlePlayPause}
              className="bg-purple-500/80 hover:bg-purple-600/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={handleMuteToggle}
              className="bg-purple-500/80 hover:bg-purple-600/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Volume2 className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={handleFullscreen}
              className="bg-purple-500/80 hover:bg-purple-600/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Fullscreen"
            >
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
