"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

interface SpeechProps {
  content: string;
}

const Speech: React.FC<SpeechProps> = ({ content }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.onended = () => {
      setIsPlaying(false);
      setIsLoaded(false);
    };
  }, []);

  const fetchAndPlayAudio = async () => {
    setIsLoading(true); // Set loading state to true while fetching
    try {
      const response = await fetch('/api/speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      const { audioContent } = await response.json();
      if (audioContent) {
        audioRef.current.src = `data:audio/mp3;base64,${audioContent}`;
        audioRef.current.play();
        setIsPlaying(true);
        setIsLoaded(true);
      }
    } catch (error) {
      console.error('Error converting text to speech:', error);
    }
    setIsLoading(false); // Reset loading state after fetching
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else if (audioRef.current.src) {
      audioRef.current.play();
    } else {
      fetchAndPlayAudio();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isLoading ? (
        <Button disabled>Loading...</Button>
      ) : (
        <Button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : isLoaded ? "Resume" : "Speak Content"}
        </Button>
      )}
    </>
  );
};

export default Speech;
