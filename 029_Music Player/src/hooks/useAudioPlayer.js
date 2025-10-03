import { useState, useEffect, useRef } from 'react'

const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef(null)

  const songs = [
    {
      id: 1,
      title: "Sunset Dreams",
      artist: "Chill Vibes",
      src: "/music/song1.mp3",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Electric Pulse",
      artist: "Neon Waves",
      src: "/music/song2.mp3",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Mountain High",
      artist: "Nature Sounds",
      src: "/music/song3.mp3",
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop"
    }
  ]

  const [currentSongIndex, setCurrentSongIndex] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)
    audio.addEventListener('ended', nextSong)

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
      audio.removeEventListener('ended', nextSong)
    }
  }, [])

  const playPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    )
    setIsPlaying(true)
  }

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    )
    setIsPlaying(true)
  }

  const seek = (time) => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = time
      setCurrentTime(time)
    }
  }

  const changeVolume = (newVolume) => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = newVolume
      setVolume(newVolume)
    }
  }

  const selectSong = (index) => {
    setCurrentSongIndex(index)
    setIsPlaying(true)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.play()
      } else {
        audio.pause()
      }
    }
  }, [currentSongIndex])

  return {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    volume,
    currentSong: songs[currentSongIndex],
    songs,
    playPause,
    nextSong,
    prevSong,
    seek,
    changeVolume,
    selectSong
  }
}

export default useAudioPlayer