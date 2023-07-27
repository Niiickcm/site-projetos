"use client";
import "./styles.css";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import {
  Heart,
  ListOrdered,
  ListVideo,
  Mic2,
  MonitorSmartphone,
  PauseCircle,
  Repeat,
  SkipBack,
  SkipForward,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";

import Album from "../../../public/assets/musics-logos/album.webp";
/* import Pause from "../../../public/assets/svg-spotify/pause.svg"; */
/* import Play from "../../../public/assets/svg-spotify/play.svg"; */
import { useBarSpotify } from "@/context/barSpotify";

export default function MusicBar() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const { state } = useBarSpotify();
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState<any>(40);
  const playlist: any = [
    {
      title: "Start Again",
      artist: "Digital Escape",
      src: "/songs/start_again.mp3",
      type: "audio/mp3",
    },
    {
      title: "High Voltage",
      artist: "Sleeping Ghost",
      src: "/songs/high_voltage.mp3",
      type: "audio/mp3",
    },
    {
      title: "Distractions",
      artist: "ATELLER",
      src: "/songs/action_time.mp3",
      type: "audio/mp3",
    },
  ];
  const startOrStop = () => {
    if (state.open) {
      if (!isPlaying) {
        start();
      }
    } else {
      stop();
    }
  };
  useEffect(() => {
    startOrStop();
  }, [state.open, currentTrackIndex]);

  const start = () => {
    audioRef.current.play();
    setIsPlaying(false);
  };
  const stop = () => {
    audioRef.current.pause();
    setIsPlaying(true);
  };
  const togglePlay = () => {
    if (isPlaying) {
      start();
    } else {
      stop();
    }
  };

  function handleNext() {
    setCurrentTrackIndex((state) => (state + 1) % playlist.length);
  }

  function handlePrevious() {
    setCurrentTrackIndex(
      (state) => (state - 1 + playlist.length) % playlist.length
    );
  }
  const [currentTimeBar, setCurrentTimeBar] = useState<any>(0);
  const [hoverRange, setHoverRange] = useState(false);
  console.log("audioRef.current", currentTimeBar);
  const styleRange: any = {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    background: hoverRange
      ? "linear-gradient(to right, #1db954, #1db954) no-repeat"
      : "linear-gradient(to right, #fff, #fff) no-repeat",
    backgroundSize: `${(currentTimeBar / audioRef.current?.duration) * 100}%`,
    cursor: " pointer",
  };

  const handleHoverEnter = () => {
    setHoverRange(true);
  };
  const handleHoverLeave = () => {
    setHoverRange(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTimeBar(audioRef.current.currentTime);
  };

  const handleSeek = (event: any) => {
    const time = event.target.value;
    audioRef.current.currentTime = time;
    setCurrentTimeBar(time);
  };

  const formatTime = (time: any) => {
    time = isNaN(time) ? "000.00" : time;
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const onMuted = () => {
    if (volume == 0) {
      setVolume(41);
      audioRef.current.volume = 0.41;
    } else {
      setVolume(0);
      audioRef.current.volume = 0;
    }
  };
  return (
    <div
      className={`absolute overflow-hidden flex px-4 ${
        state.open ? "h-[90px]" : "h-[0px]"
      } w-full  bottom-0 right-0 left-0  bg-[#181818] transition-all`}
    >
      <div className="flex items-center gap-5 w-[276px]">
        <div className="w-14 h-14">
          <Image src={Album} alt="album" />
        </div>
        <div className="flex flex-col">
          <a className="font-normal text-sm text-white">
            {playlist[currentTrackIndex].title}
          </a>
          <a className="font-normal text-[11px] text-[#b3b3b3]">
            {playlist[currentTrackIndex].artist}
          </a>
        </div>
        <button>
          <Heart
            size={16}
            className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
          />
        </button>
      </div>
      <div className="grow flex  flex-col items-center justify-around">
        <div className="flex flex-col gap-2 items-center w-[60%] w-[276px]">
          <div className="flex justify-center gap-5 w-full">
            <button>
              <ListOrdered
                className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
                size={20}
              />
            </button>
            <button onClick={handlePrevious}>
              <SkipBack
                size={20}
                className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
              />
            </button>

            <button
              onClick={togglePlay}
              className="flex items-center justify-center bg-blue-50 w-8 h-8 overflow-hidden rounded-full p-[2px] hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <Play style={{ marginLeft: 3 }} size={21} fill="#181818" />
              ) : (
                <Pause size={20} fill="#181818" />
              )}
            </button>

            <button onClick={handleNext}>
              <SkipForward
                size={20}
                className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
              />
            </button>
            <button>
              <Repeat
                size={20}
                className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
              />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="font-normal text-xs text-[#ffffffb3]">
              {formatTime(currentTimeBar)}
            </div>
            <input
              type="range"
              onChange={(e) => {
                setCurrentTimeBar(e.target.value),
                  (audioRef.current.currentTime = e.target.value);
              }}
              style={{
                width: `100%`,
                height: 4,
                backgroundColor: "#5e5e5e",
                outline: "none",
                borderRadius: 10,
                appearance: "none",
                marginTop: 5,
                backgroundSize: `${
                  (currentTimeBar / audioRef.current?.duration) * 100
                }%`,
              }}
              min="0"
              max={audioRef.current && audioRef.current.duration}
              step="1"
              value={currentTimeBar}
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
            />
            <div className="font-normal text-xs text-[#ffffffb3]">
              {formatTime(audioRef.current && audioRef.current.duration)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 w-[276px]">
        {" "}
        <button>
          <Mic2
            size={16}
            className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
          />
        </button>
        <button>
          <ListVideo
            size={16}
            className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
          />
        </button>{" "}
        <button>
          <MonitorSmartphone
            size={16}
            className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
          />
        </button>
        <div className="flex items-center justify-center gap-2">
          <div className="w-5">
            {volume == 0 && (
              <VolumeX
                size={19}
                className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
                onClick={onMuted}
              />
            )}
            {volume < 40 && volume > 0 && (
              <Volume
                size={19}
                className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
                onClick={onMuted}
              />
            )}
            {volume > 40 && volume < 70 && (
              <Volume1
                size={19}
                className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
                onClick={onMuted}
              />
            )}
            {volume > 70 && (
              <Volume2
                size={19}
                className="text-[#ffffffb3] hover:text-white active:text-[#ffffffb3]"
                onClick={onMuted}
              />
            )}
          </div>
          <input
            type="range"
            onChange={(e) => {
              setVolume(Number(e.target.value)),
                (audioRef.current.volume = Number(e.target.value) / 100);
            }}
            style={{
              width: `90px`,
              height: 4,
              backgroundColor: "#5e5e5e",
              outline: "none",
              borderRadius: 10,
              appearance: "none",
              backgroundSize: `${volume}%`,
            }}
            min="0"
            max="100"
            step="1"
            value={volume}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          />
        </div>
      </div>
      <audio
        style={{ display: "none" }}
        ref={audioRef}
        src={playlist[currentTrackIndex].src}
        onTimeUpdate={handleTimeUpdate}
        onChange={handleSeek}
      ></audio>
    </div>
  );
}
