"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import VideoPlayerModal from "./VideoPlayerModal";

interface MovieButtonProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}

const MovieButtons = ({
  overview,
  youtubeUrl,
  id,
  age,
  title,
  releaseDate,
  duration,
}: MovieButtonProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 w-6 h-6" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>
      <VideoPlayerModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtube={youtubeUrl}
      />
    </>
  );
};
export default MovieButtons;
