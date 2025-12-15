import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  text: string;
}

export function AudioPlayer({ text }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [progress, setProgress] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const textRef = useRef(text);

  const speeds = [0.75, 1, 1.25, 1.5, 2];

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlay = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textRef.current);
    utterance.rate = speed;
    utterance.pitch = 1;

    // Get available voices and prefer a natural-sounding one
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.name.includes("Google") || v.name.includes("Natural") || v.lang.startsWith("en")
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setProgress(0);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
    };

    utterance.onboundary = (event) => {
      const percentage = (event.charIndex / textRef.current.length) * 100;
      setProgress(percentage);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handleRestart = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  const handleSpeedChange = () => {
    const currentIndex = speeds.indexOf(speed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    const newSpeed = speeds[nextIndex];
    setSpeed(newSpeed);

    // If currently playing, restart with new speed
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(textRef.current);
        utterance.rate = newSpeed;
        
        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(100);
        };
        utterance.onboundary = (event) => {
          const percentage = (event.charIndex / textRef.current.length) * 100;
          setProgress(percentage);
        };

        window.speechSynthesis.speak(utterance);
      }, 100);
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm text-foreground">Listen to Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="icon"
              onClick={handlePlay}
              className="rounded-full"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleRestart}
              className="rounded-full"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button
              variant="secondary"
              size="sm"
              onClick={handleSpeedChange}
              className="min-w-16 font-mono"
            >
              {speed}x
            </Button>
          </div>

          {/* Progress bar */}
          <div className="flex-1 max-w-xs">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <span className="text-xs text-muted-foreground">
            {isPlaying ? "Playing..." : isPaused ? "Paused" : "Ready"}
          </span>
        </div>
      </div>
    </div>
  );
}
