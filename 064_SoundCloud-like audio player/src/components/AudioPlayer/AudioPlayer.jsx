import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { TrackInfo } from './TrackInfo';

export const AudioPlayer = ({ track, onNext, onPrevious }) => {
  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlayPause,
    setAudioTime,
    setVolume,
    toggleMute,
    setIsPlaying
  } = useAudioPlayer();

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={track?.audio}
        onEnded={onNext}
      />
      
      <TrackInfo 
        track={track} 
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
      />

      <div className="player-controls">
        <div className="control-buttons">
          <button className="control-btn">
            <Shuffle size={18} />
          </button>
          <button className="control-btn" onClick={onPrevious}>
            <SkipBack size={18} />
          </button>
          <button className="play-pause-btn" onClick={togglePlayPause}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="control-btn" onClick={onNext}>
            <SkipForward size={18} />
          </button>
          <button className="control-btn">
            <Repeat size={18} />
          </button>
        </div>

        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onTimeUpdate={setAudioTime}
        />
      </div>

      <VolumeControl
        volume={volume}
        isMuted={isMuted}
        onVolumeChange={setVolume}
        onToggleMute={toggleMute}
      />
    </div>
  );
};