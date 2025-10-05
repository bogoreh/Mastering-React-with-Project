import { useRef } from 'react'

const useAudio = () => {
  const audioRef = useRef(null)

  const play = (url) => {
    // In a real app, you would use the actual stream URL
    console.log('Playing:', url)
    
    if (!audioRef.current) {
      audioRef.current = new Audio()
    }
    
    // For demo purposes, we'll just simulate playing
    // audioRef.current.src = url
    // audioRef.current.play().catch(console.error)
  }

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  return {
    play,
    pause
  }
}

export default useAudio